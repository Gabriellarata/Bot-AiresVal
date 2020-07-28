/*CMD
  command: /se_congela_split
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿Se congela?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/desde_cuando_split")
}
if(message=="No"){
  Bot.runCommand("/necesitamos_revisarlo")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/compresor_enciende_split")
}
