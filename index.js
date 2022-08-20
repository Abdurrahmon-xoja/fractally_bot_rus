const {Telegraf} = require('telegraf')
require('dotenv').config()

const {getHive, isExist} = require('./functions')

const bot = new Telegraf(process.env.telegramBotToken)


bot.start(ctx => {
    ctx.reply('напишите учетную запись hive')
})


bot.on('message', ctx => {
    if (isExist(ctx.message.text)) {
        ctx.reply(getHive(ctx.message.text))
        ctx.reply('напишите учетную запись hive')
    } else {
        ctx.reply('этой учетной записи hive не существует, попробуйте другую')
    }


})


bot.launch()