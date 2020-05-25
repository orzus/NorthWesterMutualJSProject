# JavaScript Code Challenge

This project requires [NodeJS 8.9.4](https://nodejs.org/en/download/) or greater.

Perform the following command to install the project's dependecies:
```
npm install
```

Perform the following command to execute all unit tests:
```
npm test
```

---

For this code challenge we are going to be working with a 
[standard deck of playing cards](https://en.wikipedia.org/wiki/Standard_52-card_deck) which contains 52 Cards in each of the 
4 suits: Spades, Hearts, Diamonds, and Clubs. Each suit contains 13 ranks: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen and King.

![standard deck of playing cards](https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Piatnikcards.jpg/2880px-Piatnikcards.jpg)

The project provides everything that you need to get started:

1. The `Suit` class models a single suit, and provides the associated data via static methods. A suit is one of [Spades, Hearts, Diamonds, Clubs]
2. The `Rank` class models a single rank, and provides the associated data via static methods. A rank is one of [Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King]
3. The `Card` class models a single card that is comprised of one `Suit` and one `Rank`
4. The `Deck` class provides the full list of _Cards_ - one for each `Suit` and `Rank` combination
5. The `Player` class models an individual that would be dealt cards
6. The `Game` class models the _Players_ as well as any unused/undealt cards that would be in the `Deck` after they were dealt
7. The `cardDealer` module is where the work to be done resides 

_It is important to note that each of these classes has a corresponding unit test suite
(example: the functionality provided within the `Suit` is ensured to be correct by the `Suit.spec` test suite) 
and any code challenge submissions need to be unit tested similarly._

#### Assignment 
 
1. Within the `cardDealer` module are the `dealAll`, `dealSome`, `shuffleDeck`, and `shuffleCards` functions that need
to be designed, completed and unit tested to ensure that they are correct.
 
You can use your creativity to decide how you want to structure a `deal` - maybe it is as many cards as possible to the number of players 
specified by the program's user, maybe it is that we deal all of the cards evenly until we cannot deal any more or maybe it something 
else all together that you design, but you do have to come up with a way to [shuffle](https://en.wikipedia.org/wiki/Shuffling) the deck in order to randomize the order of the cards 
which is how the element of chance is generated within card games. 

#### Evaluation Criteria

1. Creativity
2. Ability to fulfill the `cardDealer`'s `deal` and `shuffle` requirements 
3. Well written and well unit tested code

Besides these basic requirements, you would make any assumptions that you would need to design a solution that you would be comfortable with. 



