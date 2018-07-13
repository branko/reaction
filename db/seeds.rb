Board.destroy_all
List.destroy_all
Card.destroy_all

board_1 = Board.create(title: 'Meals')

list_1 = List.create(title: 'Breakfast', board: board_1)
list_2 = List.create(title: 'Lunch', board: board_1)

card_1 = list_1.cards.create(title: 'Oatmeal', description: 'Maple and brown sugar', board: board_1, labels: ['red'], due_date: '2018-07-04', completed: true)
card_2 = list_1.cards.create(title: 'Cereal', board: board_1, labels: [], due_date: '2018-09-05')
card_3 = list_2.cards.create(title: 'Pad Thai', description: 'Extra peanuts', board: board_1, labels: [])
card_4 = list_2.cards.create(title: 'BLT', board: board_1, labels: ['yellow', 'green', 'blue'], due_date: '2018-11-02')
card_5 = list_2.cards.create(title: 'Potato leek soup', board: board_1, labels: ['blue', 'purple'])

card_1.comments.create(text: 'instant or steel cut?')
card_4.comments.create(text: 'hold the T')
card_5.comments.create(text: 'so good')
