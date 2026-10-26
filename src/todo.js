export default function createTodo(title,description,dueDate,priority,notes = ''){
    return{
        title,
        description,
        dueDate,
        priority,
        notes,
        completed:false,
        toggledCompleted(){
            this.completed=!this.completed;
        }
    }
}