import { promisify } from "util";

const exec = promisify(require("child_process").exec);

const ERROR_MESSAGES = {
    missingRequiredParam: (param: string) =>
        `Missing required parameter ${param}`
};

type LogrocketOptions = {
    /** path of directory to upload source map files from */
    path: string;
    /** release version */
    release: string;
    /** log rocket api key */
    apiKey: string;
    /** url-prefix option to the upload command matching the path relative to the hostname  */
    urlPrefix?: string;
};

class WebpackLogrocketPlugin {
    private path: string;
    private release: string;
    private apiKey: string;
    private urlPrefix: string;

    constructor(options: LogrocketOptions) {
        this.path = options.path;
        this.release = options.release;
        this.apiKey = options.apiKey;
        this.urlPrefix = options.urlPrefix;

        this.validateOptions();
    }

    private validateOptions() {
        if (!this.path) {
            throw new Error(ERROR_MESSAGES.missingRequiredParam("path"));
        }

        if (!this.apiKey) {
            throw new Error(ERROR_MESSAGES.missingRequiredParam("apiKey"));
        }

        if (!this.release) {
            throw new Error(ERROR_MESSAGES.missingRequiredParam("release"));
        }
    }

    private async createRelease() {
        const { stdout, stderr } = await exec(
            `logrocket release ${this.release} --apikey="${this.apiKey}"`
        );
        if (stderr) {
            console.error(`error: ${stderr}`);
            throw new Error(stderr);
        }
        console.log(stdout);
    }

    private async uploadSourceMap() {
        let uploadCmd = `logrocket upload ${this.path} --release=${this.release} --apikey="${this.apiKey}"`;
        if (this.urlPrefix) {
            uploadCmd = uploadCmd + ` --url-prefix="${this.urlPrefix}"`;
        }
        const { stdout, stderr } = await exec(uploadCmd);
        if (stderr) {
            console.error(`error: ${stderr}`);
            throw new Error(stderr);
        }
        console.log(stdout);
    }

    public apply(compiler: any) {
        compiler.hooks.afterEmit.tapPromise(
            "WebpackLogrocketPlugin",
            async (compilation) => {
                try {
                    await this.createRelease();
                    await this.uploadSourceMap();
                } catch (err) {
                    err.message = `WebpackLogrocketPlugin: ${err.message}`;
                    console.error(err.message);
                    compilation.errors.push(err);
                }
                await this.createRelease();
            }
        );
    }
}

export = WebpackLogrocketPlugin;
