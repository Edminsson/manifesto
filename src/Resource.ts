module Manifesto {
    export class Resource extends ManifestResource implements IResource{

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        getFormat(): ResourceFormat {
            var format: string = this.getProperty('format');

            if (format){
                return new ResourceFormat(format.toLowerCase());
            }

            return null;
        }

        getType(): ResourceType {
            var type: string = this.getProperty('@type');

            if (type){
                return new ResourceType(type.toLowerCase());
            }

            return null;
        }

        getWidth(): number {
            return this.getProperty('width');
        }

        getHeight(): number {
            return this.getProperty('height');
        }

        getMaxWidth(): number {
            return this.getProperty('maxWidth');
        }

        getMaxHeight(): number {
            var maxHeight = this.getProperty('maxHeight');

            // if a maxHeight hasn't been specified, default to maxWidth.
            // maxWidth in essence becomes maxEdge
            if (!maxHeight) {
                return this.getMaxWidth();
            }
        }
    }
}
