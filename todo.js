function TodoService ($q, browserStorage) {
	var service = this;

	service.getTodos = function() {
		var todos = browserStorage.getItem('todos');
		return $q.when(todos);
	};

	service.addTodo = function(todo) {
		service
			.getTodos()
			.then(function(todos) {
				todo.id = 
				todos.push(todo);
			})
	}
}