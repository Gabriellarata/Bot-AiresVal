/*CMD
  command: /enciende_split
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿Enciende?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/pantalla_error_split")
}
if(message=="No"){
  Api.sendSticker({ sticker:"https://i.ibb.co/q94HnRC/Sticker3-1.webp" })
  Bot.runCommand("/proceso_1")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/ventana_o_split")
}
