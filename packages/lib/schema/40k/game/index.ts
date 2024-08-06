import { Entity } from '@/schema/40k';
import { GameSystem } from '@/schema/40k/game/gameSystem';

export class Game extends Entity {
    gameSystem: GameSystem = new GameSystem();

    public createChild(type: string, attributes: Record<string, string | number | boolean>): GameSystem {
        switch (type) {
            case 'gameSystem':
                return GameSystem.create(attributes);
            default:
                throw new Error(`Unknown child: ${type}`);
        }
    }

    public toObject(): Record<string, unknown> {
        return {
            gameSystem: this.gameSystem.toObject(),
        };
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- not needed
    public static create(_attributes: Record<string, string | number | boolean>): Game {
        return new Game();
    }
}
