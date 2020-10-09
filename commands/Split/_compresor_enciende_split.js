/*CMD
  command: /compresor_enciende_split
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿El compresor enciende?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/se_congela_split")
}
if(message=="No"){
  Bot.runCommand("/hace_ruido_apaga_split")
}		
if(message=="Ir atrás"){
  Bot.runCommand("/ventilador_funciona")
}
