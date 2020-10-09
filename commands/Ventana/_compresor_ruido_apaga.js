/*CMD
  command: /compresor_ruido_apaga
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿El Compresor hace un ruido fuerte y luego se apaga?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Api.sendSticker({ sticker:"https://i.ibb.co/q94HnRC/Sticker3-1.webp" })
  Bot.runCommand("/proceso_15")
}
if(message=="No"){
  Bot.runCommand("/necesitamos_revisarlo")
}	
if(message=="Ir atrás"){
  Bot.runCommand("/no_enfria_compresor_enciende")
}	
