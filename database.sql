-- phpMyAdmin SQL Dump
-- version 5.2.1-1.fc37
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 15, 2023 at 11:06 AM
-- Server version: 10.5.19-MariaDB
-- PHP Version: 8.1.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sensors`
--

-- --------------------------------------------------------

--
-- Table structure for table `datalog`
--

CREATE TABLE `datalog` (
  `ID` int(11) NOT NULL,
  `deviceid` int(255) NOT NULL,
  `value` int(255) NOT NULL,
  `typeid` int(255) NOT NULL,
  `dateadded` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `datalog`
--

INSERT INTO `datalog` (`ID`, `deviceid`, `value`, `typeid`, `dateadded`) VALUES
(1, 1, 60, 1, '2023-05-15 11:05:44'),
(2, 1, 115, 1, '2023-05-15 11:05:50'),
(3, 1, 384, 1, '2023-05-15 11:05:55'),
(4, 1, 224, 1, '2023-05-15 11:06:01'),
(5, 1, 93, 1, '2023-05-15 11:06:06'),
(6, 1, 199, 1, '2023-05-15 11:06:27'),
(7, 1, 248, 1, '2023-05-15 11:06:32'),
(8, 1, 215, 1, '2023-05-15 11:06:38'),
(9, 1, 299, 1, '2023-05-15 11:06:44'),
(10, 1, 207, 1, '2023-05-15 11:06:49'),
(11, 1, 30, 1, '2023-05-15 11:14:56'),
(12, 1, 139, 1, '2023-05-15 11:15:01'),
(13, 1, 82, 1, '2023-05-15 11:15:07'),
(14, 1, 50, 1, '2023-05-15 11:15:13'),
(15, 1, 33, 1, '2023-05-15 11:15:18'),
(16, 1, 336, 1, '2023-05-15 11:16:57'),
(17, 1, 260, 1, '2023-05-15 11:17:03'),
(18, 1, 384, 1, '2023-05-15 11:17:09'),
(19, 1, 384, 1, '2023-05-15 11:17:14'),
(20, 1, 151, 1, '2023-05-15 11:17:20'),
(21, 1, 32, 1, '2023-05-15 11:26:50'),
(22, 1, 11, 1, '2023-05-15 11:26:56'),
(23, 1, 11, 1, '2023-05-15 11:27:01'),
(24, 1, 10, 1, '2023-05-15 11:27:07'),
(25, 1, 10, 1, '2023-05-15 11:27:13'),
(26, 1, 207, 1, '2023-05-15 11:34:37'),
(27, 1, 22, 1, '2023-05-15 11:45:06'),
(28, 1, 24, 1, '2023-05-15 11:45:20'),
(29, 1, 22, 1, '2023-05-15 11:45:57'),
(30, 1, 24, 1, '2023-05-15 11:46:19'),
(31, 1, 23, 1, '2023-05-15 11:46:49'),
(32, 1, 24, 1, '2023-05-15 11:47:31'),
(33, 1, 24, 1, '2023-05-15 11:48:47'),
(34, 1, 24, 1, '2023-05-15 11:49:43'),
(35, 1, 25, 1, '2023-05-15 11:50:05'),
(36, 1, 24, 1, '2023-05-15 11:50:11'),
(37, 1, 23, 1, '2023-05-15 11:50:16'),
(38, 1, 25, 1, '2023-05-15 11:50:22'),
(39, 1, 24, 1, '2023-05-15 11:50:27'),
(40, 1, 23, 1, '2023-05-15 11:52:44'),
(41, 1, 23, 1, '2023-05-15 11:52:50'),
(42, 1, 24, 1, '2023-05-15 11:52:56'),
(43, 1, 25, 1, '2023-05-15 11:53:01'),
(44, 1, 25, 1, '2023-05-15 11:53:07'),
(45, 1, 23, 1, '2023-05-15 11:53:34'),
(46, 1, 25, 1, '2023-05-15 11:53:40'),
(47, 1, 24, 1, '2023-05-15 11:53:46'),
(48, 1, 23, 1, '2023-05-15 11:53:51'),
(49, 1, 25, 1, '2023-05-15 11:53:57'),
(50, 1, 63, 1, '2023-05-15 12:57:55'),
(51, 1, 367, 1, '2023-05-15 12:58:00'),
(52, 1, 106, 1, '2023-05-15 12:58:06'),
(53, 1, 73, 1, '2023-05-15 12:58:12'),
(54, 1, 63, 1, '2023-05-15 12:58:17'),
(55, 1, 82, 1, '2023-05-15 12:59:06'),
(56, 1, 112, 1, '2023-05-15 12:59:12'),
(57, 1, 55, 1, '2023-05-15 12:59:19'),
(58, 1, 299, 1, '2023-05-15 12:59:25'),
(59, 1, 69, 1, '2023-05-15 12:59:31'),
(60, 1, 48, 1, '2023-05-15 13:01:27'),
(61, 1, 66, 1, '2023-05-15 13:01:33'),
(62, 1, 44, 1, '2023-05-15 13:01:39'),
(63, 1, 74, 1, '2023-05-15 13:01:45'),
(64, 1, 54, 1, '2023-05-15 13:01:51'),
(65, 1, 59, 1, '2023-05-15 13:03:35'),
(66, 1, 72, 1, '2023-05-15 13:03:42'),
(67, 1, 65, 1, '2023-05-15 13:03:48'),
(68, 1, 94, 1, '2023-05-15 13:03:55'),
(69, 1, 60, 1, '2023-05-15 13:04:01'),
(70, 1, 58, 1, '2023-05-15 13:04:07'),
(71, 1, 65, 1, '2023-05-15 13:04:14'),
(72, 1, 46, 1, '2023-05-15 13:04:20'),
(73, 1, 132, 1, '2023-05-15 13:04:27'),
(74, 1, 49, 1, '2023-05-15 13:04:33'),
(75, 1, 60, 1, '2023-05-15 13:04:39'),
(76, 1, 147, 1, '2023-05-15 13:04:46'),
(77, 1, 55, 1, '2023-05-15 13:04:52'),
(78, 1, 57, 1, '2023-05-15 13:04:59'),
(79, 1, 47, 1, '2023-05-15 13:05:05'),
(80, 1, 46, 1, '2023-05-15 13:05:11'),
(81, 1, 64, 1, '2023-05-15 13:05:18'),
(82, 1, 50, 1, '2023-05-15 13:05:24'),
(83, 1, 65, 1, '2023-05-15 13:05:31'),
(84, 1, 57, 1, '2023-05-15 13:05:37');

-- --------------------------------------------------------

--
-- Table structure for table `devices`
--

CREATE TABLE `devices` (
  `ID` int(11) NOT NULL,
  `uid` varchar(255) NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `devices`
--

INSERT INTO `devices` (`ID`, `uid`, `type`) VALUES
(1, '28:cd:c1:07:49:ab', 1);

-- --------------------------------------------------------

--
-- Table structure for table `devicetype`
--

CREATE TABLE `devicetype` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `datalog`
--
ALTER TABLE `datalog`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `devicetype`
--
ALTER TABLE `devicetype`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `datalog`
--
ALTER TABLE `datalog`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `devices`
--
ALTER TABLE `devices`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `devicetype`
--
ALTER TABLE `devicetype`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
