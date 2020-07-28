/*CMD
  command: /desde_cuando_split
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Split
  answer: ¿Cuándo fue la última vez que se le hizo mantenimiento al equipo?
  keyboard: 6 meses o menos, Más de 6 meses, \n Ir atrás
  aliases: 
CMD*/

if(message=="6 meses o menos"){
  Bot.runCommand("/proceso_9")
}
if(message=="Más de 6 meses"){
  Bot.runCommand("/suciedad_unidad_interna")
}
if(message=="Ir atrás"){
  Bot.runCommand("/se_congela_split")
}
