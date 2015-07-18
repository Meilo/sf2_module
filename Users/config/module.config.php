<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2015 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

return array(
	'controllers' => array(
		'invokables' => array(
			'Users\Controller\Index' => 'Users\Controller\IndexController',
            // 'Users\Controller\Admin' => 'Admin\Controller\AdminController',
		)
	),
    'router' => array(
        'routes' => array(
            'home' => array(
                'type' => 'Literal',
                'options' => array(
                    'route'    => '/users',
                    'defaults' => array(
                    	'__NAMESPACE__' => 'Users\Controller',
                        'controller' => 'Index',
                        'action'     => 'index',
                    ),
                ),
                'may_terminate' => true,
                'child_routes' => array(
                    'default' => array(
                        'type'    => 'Segment',
                        'options' => array(
                            'route'    => '/[:controller[/:action]]',
                            'constraints' => array(
                                'controller' => '[a-zA-Z][a-zA-Z0-9_-]*',
                                'action'     => '[a-zA-Z][a-zA-Z0-9_-]*',
                            ),
                            'defaults' => array(
                            ),
                        ),
                    ),
                ),
            ),
    	),
    ),
// 'router' => array(
//         'routes' => array(
//             'home' => array(
//                 'type' => 'Literal',
//                 'options' => array(
//                     'route'    => '/users',
//                     'defaults' => array(
//                         '__NAMESPACE__' => 'Users\Controller',
//                         'controller' => 'Admin',
//                         'action'     => 'index',
//                     ),
//                 ),
//                 'may_terminate' => true,
//                 'child_routes' => array(
//                     'default' => array(
//                         'type'    => 'Segment',
//                         'options' => array(
//                             'route'    => '/[:controller[/:action]]',
//                             'constraints' => array(
//                                 'controller' => '[a-zA-Z][a-zA-Z0-9_-]*',
//                                 'action'     => '[a-zA-Z][a-zA-Z0-9_-]*',
//                             ),
//                             'defaults' => array(
//                             ),
//                         ),
//                     ),
//                 ),
//             ),
//         ),
//     ),
    'view_manager' => array(
	    'template_path_stack' => array(
           'users' => __DIR__ . '/../view',
           // 'admin' => __DIR__ . '/../view',
        ),
    )
);
return array(
    'Users' => array(
        'resolver_configs' => array(
            'paths' => array(
                'Application' => __DIR__ . '/../public',
            ),
        ),
    ),
);
