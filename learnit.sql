-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 21-03-2019 a las 15:28:03
-- Versión del servidor: 5.7.23
-- Versión de PHP: 5.6.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `learnit`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `completed` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `user_id`, `title`, `description`, `completed`, `created_at`, `updated_at`) VALUES
(2, 1, 'Complete the questx', 'Do whatever you need to do this', 1, '2019-03-21 00:01:39', '2019-03-21 07:52:18'),
(3, 1, 'Nueva', 'Holax', 1, '2019-03-21 00:50:23', '2019-03-21 01:03:05'),
(4, 1, 'No mms', 'sdsdsd', 1, '2019-03-21 07:07:43', '2019-03-21 07:52:19'),
(11, 1, 'sdfsdfs', 'sdfsdfsdfdsf', 0, '2019-03-21 07:52:09', '2019-03-21 07:52:09'),
(12, 1, 'Editable', 'Nani', 0, '2019-03-21 08:01:18', '2019-03-21 08:04:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
