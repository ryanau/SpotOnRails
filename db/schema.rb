# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150803052147) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pins", force: :cascade do |t|
    t.boolean  "active"
    t.integer  "user_id",          default: 0
    t.integer  "accepted_user_id", default: 0
    t.boolean  "accepted",         default: false
    t.float    "latitude"
    t.float    "longitude"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password_hash"
    t.string   "car_make"
    t.string   "car_color"
    t.boolean  "dropped_pin",          default: false
    t.boolean  "accepted_pin",         default: false
    t.boolean  "dropped_pin_accepted", default: false
    t.float    "latitude"
    t.float    "longitude"
    t.integer  "active_pin_id"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

end
