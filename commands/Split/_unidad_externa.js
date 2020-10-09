/*CMD
  command: /unidad_externa
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿La unidad externa enciende?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/ventilador_funciona")
}
if(message=="No"){
  Api.sendSticker({ sticker:"https://i.ibb.co/q94HnRC/Sticker3-1.webp" })
  Bot.runCommand("/proceso_6")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/enfria")
}
