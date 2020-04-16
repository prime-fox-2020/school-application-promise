create table teachers (
    id serial primary key,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(50),
	gender VARCHAR(50)
);

create table students (
	id serial primary key,
    first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(50),
	gender VARCHAR(50),
	birth_date DATE
);

create table subjects (
    id serial primary key,
    subject_name VARCHAR(50)
);

insert into teachers (first_name, last_name, email, gender) values ('Jeannette', 'Soper', 'jsoper0@wsj.com', 'Female');
insert into teachers (first_name, last_name, email, gender) values ('Banky', 'Kleinberer', 'bkleinberer1@icq.com', 'Male');
insert into teachers (first_name, last_name, email, gender) values ('Shepperd', 'Pidler', 'spidler2@mashable.com', 'Male');
insert into teachers (first_name, last_name, email, gender) values ('Deeann', 'Fenech', 'dfenech3@eventbrite.com', 'Female');
insert into teachers (first_name, last_name, email, gender) values ('Keely', 'Ricket', 'kricket4@google.fr', 'Female');
insert into teachers (first_name, last_name, email, gender) values ('Evered', 'Cracknell', 'ecracknell5@hugedomains.com', 'Male');
insert into teachers (first_name, last_name, email, gender) values ('Dewie', 'Riach', 'driach6@example.com', 'Male');
insert into teachers (first_name, last_name, email, gender) values ('Colette', 'Lackeye', 'clackeye7@g.co', 'Female');
insert into teachers (first_name, last_name, email, gender) values ('Lek', 'Perrat', 'lperrat8@jugem.jp', 'Male');
insert into teachers (first_name, last_name, email, gender) values ('Dmitri', 'Mettetal', 'dmettetal9@istockphoto.com', 'Male');
insert into teachers (first_name, last_name, email, gender) values ('Elisha', 'Sedgeworth', 'esedgewortha@sun.com', 'Female');
insert into teachers (first_name, last_name, email, gender) values ('Perkin', 'Thams', 'pthamsb@boston.com', 'Male');
insert into teachers (first_name, last_name, email, gender) values ('Kermy', 'Bouda', 'kboudac@hostgator.com', 'Male');
insert into teachers (first_name, last_name, email, gender) values ('Tiff', 'Dykas', 'tdykasd@dropbox.com', 'Female');
insert into teachers (first_name, last_name, email, gender) values ('Vonni', 'Marsh', 'vmarshe@biblegateway.com', 'Female');
insert into teachers (first_name, last_name, email, gender) values ('Janna', 'Exposito', 'jexpositof@deviantart.com', 'Female');
insert into teachers (first_name, last_name, email, gender) values ('Christean', 'Showalter', 'cshowalterg@sogou.com', 'Female');
insert into teachers (first_name, last_name, email, gender) values ('Analiese', 'Cribbott', 'acribbotth@studiopress.com', 'Female');

insert into students (first_name, last_name, email, gender, birth_date) values ('Deeanne', 'Bahlmann', 'dbahlmann0@amazon.co.uk', 'Female', '14/04/1995');
insert into students (first_name, last_name, email, gender, birth_date) values ('Hallie', 'Buzek', 'hbuzek1@state.tx.us', 'Female', '15/10/1996');
insert into students (first_name, last_name, email, gender, birth_date) values ('Selena', 'Juniper', 'sjuniper2@indiegogo.com', 'Female', '08/10/1990');
insert into students (first_name, last_name, email, gender, birth_date) values ('Kara', 'Dudding', 'kdudding3@deliciousdays.com', 'Female', '21/08/1997');
insert into students (first_name, last_name, email, gender, birth_date) values ('Reese', 'Santos', 'rsantos4@gravatar.com', 'Male', '20/05/1990');
insert into students (first_name, last_name, email, gender, birth_date) values ('Gradeigh', 'Mates', 'gmates5@ovh.net', 'Male', '07/10/1996');
insert into students (first_name, last_name, email, gender, birth_date) values ('Reinaldos', 'Ishaki', 'rishaki6@narod.ru', 'Male', '19/09/1999');
insert into students (first_name, last_name, email, gender, birth_date) values ('Eduard', 'Annwyl', 'eannwyl7@earthlink.net', 'Male', '24/08/1995');
insert into students (first_name, last_name, email, gender, birth_date) values ('Orelia', 'Cawtheray', 'ocawtheray8@skyrock.com', 'Female', '22/03/1995');
insert into students (first_name, last_name, email, gender, birth_date) values ('Cookie', 'Yele', 'cyele9@github.io', 'Female', '14/03/1990');
insert into students (first_name, last_name, email, gender, birth_date) values ('Arabella', 'Goodyer', 'agoodyera@vimeo.com', 'Female', '17/02/1992');
insert into students (first_name, last_name, email, gender, birth_date) values ('Tabbie', 'Gillian', 'tgillianb@apache.org', 'Female', '01/08/1998');
insert into students (first_name, last_name, email, gender, birth_date) values ('Joyann', 'Robottham', 'jrobotthamc@163.com', 'Female', '21/10/1992');
insert into students (first_name, last_name, email, gender, birth_date) values ('Pierrette', 'O''Nowlan', 'ponowland@elegantthemes.com', 'Female', '02/03/1997');
insert into students (first_name, last_name, email, gender, birth_date) values ('Tonya', 'Swinerd', 'tswinerde@devhub.com', 'Female', '28/12/1999');
insert into students (first_name, last_name, email, gender, birth_date) values ('Maurise', 'Daly', 'mdalyf@soundcloud.com', 'Female', '08/09/1990');
insert into students (first_name, last_name, email, gender, birth_date) values ('Marlowe', 'Blackesland', 'mblackeslandg@gravatar.com', 'Male', '08/02/1990');

insert into subjects (subject_name) values ('Fisika');
insert into subjects (subject_name) values ('Matematika');
insert into subjects (subject_name) values ('Biologi');
insert into subjects (subject_name) values ('Programming');