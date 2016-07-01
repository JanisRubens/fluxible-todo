// Require all routes that app will use;
import todosRoutes from './todos/routes';

 export default function ( app ) {
	app.use('/todos', todosRoutes);
};