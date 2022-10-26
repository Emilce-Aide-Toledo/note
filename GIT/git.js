//Control de versiones: Git
//Los sistemas de control de versiones son herramientas de software que ayudan a los equipos de software 
//a gestionar los cambios en el código fuente a lo largo del tiempo. 

const comando = (nombre, descripcion)=>{
 return `${nombre} - Descripción: ${descripcion}.`
};

const init = comando('git init', 'Crea un nuevo repositorio de Git');

const status = comando('git status', 'Sirve para ver estado de archivos')

const add = comando('git add', 'Sirve para agregar los archivos con cambios');

const commit = comando('git commit -m', 'Agregas un comentario respecto a los archivos que guardaste con git add. Es importante que sea descriptivo');

const push = comando('git push origin RAMA', 'Sirve para enviar los cambios al repositorio en GitHub');

const fetch = comando('git fetch' || 'git fetch origin RAMA', 'Permite bajar los cambios');

const merge = comando('git merge' || 'git fetch origin RAMA', 'Permite aceptar los cambios');

const pull = comando('git pull', 'Baja y acepta los cambios en un solo comando');

const show = comando('git show', 'Muestra todos los cambios historicos hechos'); 

const log = comando('git log', 'Permite ver el historial de cambios del archivo');

const branch = comando('git branch' || 'git branch RAMA', 'Permite ver en que rama se encuentra. Agregando el nombre de la RAMA, creara la rama');

const checkout= comando('git checkout RAMA', 'Permitira cambiar de RAMA');

const branch1 = comando('git branch -d RAMA' || 'git branch -D', 'Elimina la rama de nuestro repositorio local.');







