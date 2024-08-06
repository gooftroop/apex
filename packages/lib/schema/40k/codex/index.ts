import { Entity } from '@/schema/40k';
import { Catalogue } from '@/schema/40k/codex/catalogue';

export class Codex extends Entity {
    catalogue: Catalogue = new Catalogue();

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Catalogue {
        switch (type) {
            case 'catalogue':
                return Catalogue.create(attributes);
            default:
                throw new Error(`Unknown child: ${type}`);
        }
    }

    public toObject(): Record<string, unknown> {
        return {
            catalogue: this.catalogue.toObject(),
        };
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- not needed
    public static create(_attributes: Record<string, string | number | boolean>): Codex {
        return new Codex();
    }
}
