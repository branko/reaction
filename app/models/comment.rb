class Comment < ApplicationRecord
  validates_presence_of :text
  belongs_to :card
end