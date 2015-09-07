module Manifesto {
    export interface IManifestResource extends IJSONLDResource{
        //new(jsonld: any, options?: IManifestoOptions);
        options: IManifestoOptions;
        getLabel(): string;
        getRendering(format: RenderingFormat | string): IRendering;
        getRenderings(): IRendering[];
        getService(profile: ServiceProfile | string): IService;
        getServices(): IService[];
    }
}