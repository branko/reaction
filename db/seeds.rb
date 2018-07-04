Board.destroy_all
List.destroy_all
Card.destroy_all

board_1 = Board.create(title: 'board 1')
list_1 = List.create(title: 'list 1', board: board_1)
list_2 = List.create(title: 'list 2', board: board_1)
list_1.cards.create(title: 'card 1', board: board_1)
list_1.cards.create(title: 'card 2', board: board_1)
list_2.cards.create(title: 'card 3', board: board_1)
list_2.cards.create(title: 'card 4', board: board_1)
list_2.cards.create(title: 'card 5', board: board_1)
