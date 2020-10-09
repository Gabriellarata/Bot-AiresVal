/*CMD
  command: /hace_ruido_apaga_split
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿Hace un fuerte ruido y luego se apaga?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Api.sendSticker({ sticker:"https://i.ibb.co/q94HnRC/Sticker3-1.webp" })
  Bot.runCommand("/proceso_8")
}
if(message=="No"){
  Bot.runCommand("/necesitamos_revisarlo")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/compresor_enciende_split")
}
