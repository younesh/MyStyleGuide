module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "src/assets/styles/config/global";
                `
                    //  @import "src/assets/styles/template/layout";
            }
        }
    }
}