# TODO App backend

## Business

### User Stories

- Người dùng có thể tạo nhiều todo item
- Người dùng có thể mark done 1 hoặc nhiều todo item
- Người dùng có thể xem toàn bộ todo (Bao gồm đã hoàn thành và chưa hoàn thành)
- Người dùng có thể filter những todo đã hoàn thành
- Người dùng có thể filter những todo chưa hoàn thành
- Người dùng có thể xóa các todo
- Người dùng có thể xóa toàn bộ những todo đã hoàn thành
- Nguoi dung có thê sưa nôi dung todo

## Analyse

### Build APIs (RESTful API)

- Create Todo (METHOD - POST) (Create single todo for each time) (`/api/createTodo`)
- Update Todo & Mark this todo as completed (`/api/updateTodo`)
- Get All Todo (`/api/todos`)
- Get All completed todos (`/api/todos`) with params: `completed: true`
- Get All activated todos (`/api/todos`) with params: `completed: false`
- Delelte Todo (`/api/deleteTodo`)
- Clear Completed todos (`/api/clearCompleted`)

> All api are accept JSON body, response JSON.
