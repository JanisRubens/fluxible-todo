// Require all routes that app will use;
import todosRoutes from './todos/routes';

 export default function ( app ) {
	 console.log("IS it working this far?");
	app.use('/todos', todosRoutes);
};