/*CMD
  command: /no_enfria_compresor_enciende
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿El compresor enciende?
  keyboard: Sí, No, \n Ir atŕas
  aliases: 
CMD*/

if(message=="Sí"){
  Api.sendSticker({ sticker:"https://i.ibb.co/q94HnRC/Sticker3-1.webp" })
  Bot.runCommand("/proceso_18")
}
if(message=="No"){
  Bot.runCommand("/compresor_ruido_apaga")
}
if(message=="Ir atrás"){
  Bot.runCommand("/enfria")
}
