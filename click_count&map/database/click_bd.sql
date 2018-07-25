-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июл 25 2018 г., 05:58
-- Версия сервера: 10.3.7-MariaDB
-- Версия PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `click_bd`
--

-- --------------------------------------------------------

--
-- Структура таблицы `activity_table`
--

CREATE TABLE `activity_table` (
  `id` int(6) NOT NULL,
  `hour` decimal(4,2) NOT NULL,
  `count` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `activity_table`
--

INSERT INTO `activity_table` (`id`, `hour`, `count`) VALUES
(102, '2.55', 4),
(103, '2.67', 1),
(104, '2.77', 1),
(105, '13.95', 4);

-- --------------------------------------------------------

--
-- Структура таблицы `clickcoords_table`
--

CREATE TABLE `clickcoords_table` (
  `id` int(6) NOT NULL,
  `coordX` int(6) NOT NULL,
  `coordY` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `clickcoords_table`
--

INSERT INTO `clickcoords_table` (`id`, `coordX`, `coordY`) VALUES
(85, 389, 583),
(86, 303, 649),
(87, 265, 674),
(88, 262, 683),
(89, 299, 651),
(90, 388, 601),
(91, 342, 651),
(92, 368, 631),
(93, 442, 587),
(94, 383, 719),
(95, 399, 704),
(96, 409, 699),
(97, 348, 714),
(98, 302, 729),
(99, 279, 741),
(100, 461, 686),
(101, 404, 673),
(102, 379, 671),
(103, 323, 832),
(104, 313, 785),
(105, 309, 762),
(106, 246, 788),
(107, 265, 772),
(108, 280, 759),
(109, 287, 752),
(110, 306, 733),
(111, 311, 724),
(112, 331, 712),
(113, 331, 712),
(114, 343, 705),
(115, 344, 705),
(116, 346, 705),
(117, 356, 724),
(118, 361, 699),
(119, 324, 660),
(120, 318, 655),
(121, 356, 843),
(122, 368, 813),
(123, 370, 768),
(124, 311, 705),
(125, 311, 764),
(126, 320, 763),
(127, 380, 671),
(128, 367, 725),
(129, 322, 630),
(130, 255, 666),
(131, 336, 529),
(132, 307, 527),
(133, 350, 572),
(134, 350, 639),
(135, 799, 673),
(136, 331, 595),
(137, 272, 612),
(138, 470, 820),
(139, 363, 563),
(140, 399, 695),
(141, 221, 650),
(142, 1036, 1128),
(143, 389, 655),
(144, 386, 671),
(145, 451, 527),
(146, 317, 625),
(147, 308, 649),
(148, 350, 659),
(149, 357, 712),
(150, 299, 688),
(151, 239, 665),
(152, 309, 722),
(153, 314, 675),
(154, 390, 576),
(155, 415, 542),
(156, 287, 667),
(157, 329, 679),
(158, 370, 615),
(159, 323, 588),
(160, 321, 646),
(161, 303, 666),
(162, 374, 607),
(163, 321, 650),
(164, 273, 757),
(165, 278, 746),
(166, 265, 588),
(167, 244, 603),
(168, 338, 615),
(169, 338, 615),
(170, 358, 651),
(171, 332, 703),
(172, 319, 712),
(173, 318, 712),
(174, 306, 731),
(175, 233, 695),
(176, 973, 1110),
(177, 895, 1112),
(178, 740, 1131),
(179, 657, 1131);

-- --------------------------------------------------------

--
-- Структура таблицы `click_table`
--

CREATE TABLE `click_table` (
  `id` int(6) NOT NULL,
  `ref` text NOT NULL,
  `count` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `activity_table`
--
ALTER TABLE `activity_table`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `clickcoords_table`
--
ALTER TABLE `clickcoords_table`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `click_table`
--
ALTER TABLE `click_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `activity_table`
--
ALTER TABLE `activity_table`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT для таблицы `clickcoords_table`
--
ALTER TABLE `clickcoords_table`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=180;

--
-- AUTO_INCREMENT для таблицы `click_table`
--
ALTER TABLE `click_table`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
