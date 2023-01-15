-- Question 1
SELECT Students.Name
FROM Students
	LEFT JOIN StudentGrades ON StudentGrades.StudentId = Students.Id
GROUP BY Students.Name
HAVING MIN(StudentGrades.Grade)>55;

-- Question 2
SELECT Students.Name,
	IFNULL(Math.Grade, 0) AS 'Math Grade',
	IFNULL(AVG(StudentGrades.Grade),0) AS 'Average'
FROM Students
	LEFT JOIN StudentGrades ON StudentGrades.StudentId = Students.Id
	LEFT JOIN (SELECT Grade, StudentGrades.StudentId
				FROM StudentGrades INNER JOIN
				Courses ON StudentGrades.Coursed = Courses.Id
				Where Courses.Name='Math') Math ON Math.StudentId = StudentGrades.StudentId
GROUP BY Students.Id;

-- Question 3
SELECT Students.Name AS studentName,
	MAX(CASE
		WHEN Courses.Name = 'History' THEN StudentGrades.Grade
        ELSE ''
	END) AS Grade
FROM Students
	LEFT JOIN StudentGrades ON StudentGrades.StudentId = Students.Id
    LEFT JOIN Courses ON StudentGrades.CoursesId = Courses.Id
GROUP BY Students.Name;

-- Question 4
SELECT Students.Name
FROM Students
	INNER JOIN StudentGrades ON StudentGrades.StudentId = Students.Id 
    INNER JOIN Courses ON StudentGrades.CourseId = Courses.Id
WHERE (Courses.Name = 'Math' OR Courses.Name = 'English')
	AND NOT EXISTS(
		SELECT 1
		FROM StudentGrades
		INNER JOIN Courses ON StudentGrades.CourseId = Courses.Id
		WHERE StudentGrades.StudentId = Students.Id
		AND Courses.Name = 'Science'
GROUP BY Students.Name
