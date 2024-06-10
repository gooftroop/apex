import { Catalogue } from './catalogue/catalogue';
import { GameSystem } from './gameSystem/gameSystem';
import type { Node } from './types';

export type { Node };

export class Schema implements Node {
    id = 'schema';

    private _catalog: Catalogue | undefined;

    private _gameSystem: GameSystem | undefined;

    get catalog(): Catalogue | undefined {
        return this._catalog;
    }

    set catalog(value: Catalogue | undefined) {
        this._catalog = value;
    }

    get gameSystem(): GameSystem | undefined {
        return this._gameSystem;
    }

    set gameSystem(value: GameSystem | undefined) {
        this._gameSystem = value;
    }
}
