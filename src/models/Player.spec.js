describe('Player.js', () => {
    const faker = require('faker');
    const Player = require('./Player');

    describe('constructor', () => {
        it('should initialize all properties', () => {
            const player = new Player('me');

            expect(player.playerName).toEqual('me');
            expect(player.cards).toEqual([]);
        });

        it('should error when playerName is omitted', () => {
            expect(() => {
                new Player(null);
            }).toThrowError('Player.constructor missing argument: playerName');
            expect(() => {
                new Player();
            }).toThrowError('Player.constructor missing argument: playerName');
        });
    });

    describe('.getName()', () => {
        it('should return the correct name', () => {
            const player = new Player('me');

            expect(player.getName()).toEqual('me');
        });
    });

    describe('.setCards()', () => {
        it('should set the correct list of cards', () => {
            const cards = ['card1', 'card2'];
            const player = new Player('me');

            player.setCards(cards);

            expect(player.cards).toEqual(cards);
        });

        it('should error when cards is omitted', () => {
            expect(() => {
                new Player('me').setCards(null);
            }).toThrowError('Player.setCards missing argument: cards');
            expect(() => {
                new Player('me').setCards();
            }).toThrowError('Player.setCards missing argument: cards');
        });
    });

    describe('.equals()', () => {
        it('should be true when players have the same name', () => {
            const myName = faker.fake('{{name.firstName}} {{name.lastName}}');
            const me = new Player(myName);
            const mirrorMe = new Player(myName);

            expect(me.equals(mirrorMe)).toEqual(true);
        });

        it('should be false when players have different names', () => {
            const myName = faker.fake('{{name.firstName}} {{name.lastName}}');
            const yourName = faker.fake('{{name.firstName}} {{name.lastName}}');

            const me = new Player(myName);
            const you = new Player(yourName);

            expect(myName).not.toEqual(yourName);
            expect(me.equals(you)).toEqual(false);
        });
    });
});
