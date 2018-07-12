Board.destroy_all
List.destroy_all
Card.destroy_all

board_1 = Board.create(title: 'board 1')

list_1 = List.create(title: 'list 1', board: board_1)
list_2 = List.create(title: 'list 2', board: board_1)

card_1 = list_1.cards.create(title: 'card 1', description: 'Some stuff about card 1', board: board_1, labels: ['red'], due_date: '2018-07-04')
card_2 = list_1.cards.create(title: 'card 2', board: board_1, labels: [], due_date: '2018-09-05')
card_3 = list_2.cards.create(title: 'card 3', description: 'Another description!', board: board_1, labels: [], due_date: '2018-05-01')
card_4 = list_2.cards.create(title: 'card 4', board: board_1, labels: ['yellow', 'green', 'blue'])
card_5 = list_2.cards.create(title: 'card 5', board: board_1, labels: [])

card_1.comments.create(text: 'this is a super great card')
card_1.comments.create(text: 'hello this is a comment')
card_1.comments.create(text: '!!!!!!')
card_3.comments.create(text: 'another card with a comment')
card_4.comments.create(text: 'we are so good at trello')
