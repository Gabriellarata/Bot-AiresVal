/*CMD
  command: /ventilador_funciona
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿El ventilador funciona?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/compresor_enciende_split")
}
if(message=="No"){
  Bot.runCommand("/proceso_7")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/unidad_externa")
}
