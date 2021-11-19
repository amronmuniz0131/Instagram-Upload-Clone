-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2021 at 04:17 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_posts`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comments`
--

CREATE TABLE `tbl_comments` (
  `post_id` int(255) NOT NULL,
  `comment_user` varchar(255) NOT NULL,
  `comment_content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_comments`
--

INSERT INTO `tbl_comments` (`post_id`, `comment_user`, `comment_content`) VALUES
(1, 'abcd', 'asdfsdfsf'),
(1, 'No_Username', 'abcd'),
(1, 'No_Username', 'ab');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_postcontents`
--

CREATE TABLE `tbl_postcontents` (
  `id` int(50) NOT NULL,
  `username` varchar(255) NOT NULL,
  `caption` varchar(255) NOT NULL,
  `imageUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_postcontents`
--

INSERT INTO `tbl_postcontents` (`id`, `username`, `caption`, `imageUrl`) VALUES
(1, 'amron', 'nice post', 'https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png'),
(2, 'awit', 'No_Username', 'http://localhost/post_images/61970b53b165f9.jpg'),
(3, 'awit', 'No_Username', 'http://localhost/post_images/61970b54ca8659.jpg'),
(4, 'awit', 'No_Username', 'http://localhost/post_images/6197131965852cgrats.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_postcontents`
--
ALTER TABLE `tbl_postcontents`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_postcontents`
--
ALTER TABLE `tbl_postcontents`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
