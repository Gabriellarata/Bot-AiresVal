/*CMD
  command: /desde_cuando_ventana
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿Cuándo fue la última vez que se le hizo mantenimiento al equipo?
  keyboard: 6 meses o menos, Más de 6 meses, \n Ir atrás
  aliases: 
CMD*/

if(message=="6 meses o menos"){
  Bot.runCommand("/proceso_9")
}
if(message=="Más de 6 meses"){
  Bot.runCommand("/filtro_sucio")
}
if(message=="Ir atrás"){
  Bot.runCommand("/se_congela")
}
