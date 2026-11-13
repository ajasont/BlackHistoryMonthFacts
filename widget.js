// Black History Facts — Scriptable iOS Widget
// ─────────────────────────────────────────────
// SETUP:
//   1. Install the free "Scriptable" app from the App Store.
//   2. Open Scriptable → tap + → paste this entire file → tap Done.
//   3. Long-press your Home Screen → + → Scriptable → pick Small / Medium / Large.
//   4. Edit the widget → choose this script.
//
// The fact rotates daily. Tap the widget to open the full web page.
// ─────────────────────────────────────────────

const REPO_URL = "https://ajasont.github.io/BlackHistoryMonthFacts/";

// ── Colour palette (matches the web app) ──────────────────────────────────────
const C = {
  bg:       new Color("#F4EFE6"),
  surface:  new Color("#FAF7F2"),
  border:   new Color("#DDD3C0"),
  brownDk:  new Color("#3D2B1F"),
  brownMd:  new Color("#7A5C3E"),
  brownLt:  new Color("#B89A78"),
  tan:      new Color("#C9B08A"),
  sageDk:   new Color("#5E7A5A"),
  sageMd:   new Color("#7A9B76"),
  sageLt:   new Color("#A8C4A4"),
};

// ── 600 facts ─────────────────────────────────────────────────────────────────
const FACTS = [
  // ── Inventors & Scientists ───────────────────────────────────────────────────
  { cat: "Inventors & Scientists", text: "Garrett Morgan invented the three-position traffic signal in 1923 and also created a breathing device that was the direct predecessor to the gas mask." },
  { cat: "Inventors & Scientists", text: "Lewis Howard Latimer invented a longer-lasting carbon filament for lightbulbs and worked directly alongside both Thomas Edison and Alexander Graham Bell." },
  { cat: "Inventors & Scientists", text: "Dr. Charles Drew pioneered blood bank technology in the 1930s, developing large-scale blood storage systems that saved countless lives during World War II." },
  { cat: "Inventors & Scientists", text: "Mae C. Jemison became the first African American woman to travel to space when she flew aboard the Space Shuttle Endeavour on September 12, 1992." },
  { cat: "Inventors & Scientists", text: "Dr. Daniel Hale Williams performed the world's first successful open-heart surgery in 1893 at Provident Hospital in Chicago, which he also founded." },
  { cat: "Inventors & Scientists", text: "Granville T. Woods, known as the 'Black Edison,' held over 60 patents, including an improved telegraph system that allowed moving trains to communicate and prevent collisions." },
  { cat: "Inventors & Scientists", text: "Dr. Patricia Bath invented the Laserphaco Probe in 1988, revolutionizing cataract surgery and restoring sight to patients who had been blind for decades." },
  { cat: "Inventors & Scientists", text: "Otis Boykin invented a wire precision resistor used in computers, radios, guided missiles — and critically, in the cardiac pacemaker." },
  { cat: "Inventors & Scientists", text: "Dr. Shirley Ann Jackson's research at Bell Labs enabled the development of the portable fax machine, touch-tone telephone, solar cells, and fiber optic cables." },
  { cat: "Inventors & Scientists", text: "Frederick McKinley Jones co-invented the portable refrigeration system for long-haul trucks in 1940, transforming the food industry and revolutionizing military logistics." },
  { cat: "Inventors & Scientists", text: "Jan Ernst Matzeliger invented the shoe lasting machine in 1883, which automated shoemaking and cut the cost of shoes by half, making them affordable for working-class families." },
  { cat: "Inventors & Scientists", text: "Percy Lavon Julian was a pioneering chemist who synthesized physostigmine to treat glaucoma and developed a fire-retardant foam used by the U.S. Navy." },
  { cat: "Inventors & Scientists", text: "Dr. Lonnie Johnson invented the Super Soaker water gun in 1982, which became one of the best-selling toys of all time, generating over $1 billion in revenue." },
  { cat: "Inventors & Scientists", text: "Dr. Mark Dean co-invented the IBM personal computer and holds three of the original nine IBM PC patents. He also led the team that created the first 1 GHz processor chip." },
  { cat: "Inventors & Scientists", text: "Norbert Rillieux invented a vacuum evaporating pan in 1846 that revolutionized sugar refining, making refined sugar affordable for the first time and setting the standard for industrial processing." },
  { cat: "Inventors & Scientists", text: "Alice H. Parker patented a gas furnace heating system in 1919 that was a direct precursor to modern central heating, designed to heat multiple rooms independently." },
  { cat: "Inventors & Scientists", text: "Andrew Jackson Beard invented the 'Jenny coupler,' an automatic railroad car coupling device that eliminated the need for workers to physically stand between cars — saving countless lives and limbs." },
  { cat: "Inventors & Scientists", text: "Alexander Miles received a patent in 1887 for an improved elevator with automatically opening and closing doors, making elevators dramatically safer for everyday use." },
  { cat: "Inventors & Scientists", text: "Thomas Jennings was the first African American to hold a U.S. patent, granted in 1821 for a dry-cleaning process called 'dry scouring.' He used the profits to buy his family's freedom." },
  { cat: "Inventors & Scientists", text: "Dr. Ernest Everett Just was a pioneering marine biologist who discovered that the egg — not the sperm — plays the primary role in initiating fertilization, overturning a century of assumption." },
  { cat: "Inventors & Scientists", text: "Dr. Neil deGrasse Tyson has directed the Hayden Planetarium in New York since 1996 and is one of the most recognized science communicators in the world." },
  { cat: "Inventors & Scientists", text: "Sarah Boone patented an improved ironing board in 1892 featuring a narrow, curved shape that made it far easier to iron sleeves and the bodies of women's garments." },
  { cat: "Inventors & Scientists", text: "Philip Emeagwali designed a formula using 65,536 computers simultaneously to perform 3.1 billion calculations per second in 1989, earning a Gordon Bell Prize and inspiring early internet architecture." },
  { cat: "Inventors & Scientists", text: "Dr. Alexa Canady became the first Black female neurosurgeon in the United States in 1981, specializing in pediatric neurosurgery." },
  { cat: "Inventors & Scientists", text: "The phrase 'the real McCoy' is widely believed to refer to Elijah McCoy, a Black engineer who invented self-lubricating machines so reliable that buyers insisted on 'the real McCoy.'" },
  { cat: "Inventors & Scientists", text: "Dr. James E. West co-invented the electret microphone in 1964, a device now found in over 90% of all microphones manufactured worldwide, including those in smartphones." },
  { cat: "Inventors & Scientists", text: "Dr. Kizzmekia Corbett was the lead scientist at the NIH who co-developed the foundational mRNA technology behind the Moderna COVID-19 vaccine." },
  { cat: "Inventors & Scientists", text: "Dr. Walter Lincoln Hawkins invented a plastic coating for telephone cables in 1956 that extended cable life from 15 to 70 years, saving AT&T hundreds of millions of dollars." },
  { cat: "Inventors & Scientists", text: "Marie Van Brittan Brown invented the first home security system in 1966, filing a patent for a closed-circuit television monitoring system — the forerunner of every modern doorbell camera." },
  { cat: "Inventors & Scientists", text: "Dr. James Andrew Harris co-discovered two new elements — Rutherfordium (element 104) and Hahnium (element 105) — at Lawrence Berkeley National Laboratory in 1969." },
  { cat: "Inventors & Scientists", text: "Dr. Roger Arliner Young was the first Black woman to publish research in a major scientific journal and the first Black woman to earn a Ph.D. in zoology in the United States." },
  { cat: "Inventors & Scientists", text: "Samuel Kountz performed the first successful kidney transplant between human beings who were not identical twins, revolutionizing transplant medicine and training over 500 transplant surgeons." },
  { cat: "Inventors & Scientists", text: "Dr. Keith Black is one of America's leading neurosurgeons, having performed over 5,000 brain surgeries and pioneered techniques for delivering cancer-fighting drugs directly to brain tumors." },
  { cat: "Inventors & Scientists", text: "Charles Henry Turner was the first scientist to prove that insects can hear and demonstrated that cockroaches can learn by trial and error — pioneering the field of insect behavioral science." },
  { cat: "Inventors & Scientists", text: "Dr. Jedidah Isler became the first Black woman to earn a Ph.D. in astrophysics from Yale University, specializing in blazars — active galactic nuclei that blast jets of energy toward Earth." },
  { cat: "Inventors & Scientists", text: "Dr. Vivien Thomas, a Black lab technician with no medical degree, developed the surgical technique to treat 'blue baby syndrome' in the 1940s. His work saved thousands of lives before receiving public recognition decades later." },
  { cat: "Inventors & Scientists", text: "Garrett Morgan's breathing device, invented in 1914, was used to rescue workers trapped underground after a gas explosion in Cleveland — proving its life-saving value to a skeptical world." },

  // ── Civil Rights ─────────────────────────────────────────────────────────────
  { cat: "Civil Rights", text: "The Montgomery Bus Boycott lasted 381 days — from December 5, 1955 to December 20, 1956 — and is one of the longest and most successful mass movements against racial segregation in U.S. history." },
  { cat: "Civil Rights", text: "Rosa Parks was not simply tired when she refused to give up her seat. She was a trained civil rights activist and NAACP secretary who had strategically prepared to resist segregation." },
  { cat: "Civil Rights", text: "The March on Washington in August 1963 drew over 250,000 people, making it one of the largest political demonstrations in U.S. history at the time." },
  { cat: "Civil Rights", text: "Fannie Lou Hamer, a sharecropper's daughter who was beaten and jailed for her activism, became one of the most powerful voting rights advocates of the 20th century." },
  { cat: "Civil Rights", text: "Thurgood Marshall argued Brown v. Board of Education before the Supreme Court in 1954, winning the landmark desegregation ruling, before becoming the first Black Supreme Court Justice in 1967." },
  { cat: "Civil Rights", text: "The Greensboro sit-ins began on February 1, 1960, when four Black college students sat at a whites-only Woolworth's lunch counter in North Carolina, igniting a nationwide sit-in movement." },
  { cat: "Civil Rights", text: "Medgar Evers, the NAACP's first field secretary in Mississippi, was assassinated in his driveway in 1963. The murderer was not convicted until 1994 — 31 years later." },
  { cat: "Civil Rights", text: "The Voting Rights Act of 1965 eliminated discriminatory voting practices such as literacy tests that had effectively disenfranchised Black voters across the South for generations." },
  { cat: "Civil Rights", text: "Freedom Riders were civil rights activists who rode interstate buses into the segregated South in 1961 to challenge the non-enforcement of desegregation rulings, facing brutal violence." },
  { cat: "Civil Rights", text: "John Lewis was beaten on the Edmund Pettus Bridge on 'Bloody Sunday' in 1965. He went on to serve 17 terms in the U.S. Congress and was awarded the Presidential Medal of Freedom." },
  { cat: "Civil Rights", text: "Dr. Martin Luther King Jr. was just 26 years old when he emerged as leader of the Montgomery Bus Boycott in 1955, launching one of history's greatest careers in moral leadership." },
  { cat: "Civil Rights", text: "The NAACP was founded in 1909 by a coalition of Black and white activists — including Ida B. Wells and W.E.B. Du Bois — and is the oldest civil rights organization in the United States." },
  { cat: "Civil Rights", text: "Bayard Rustin was the chief organizer of the 1963 March on Washington, a brilliant strategist who was deliberately kept out of the spotlight because of his sexuality." },
  { cat: "Civil Rights", text: "Ida B. Wells-Barnett launched a pioneering anti-lynching campaign in the 1890s, risking her life to document and expose racial terror across the South at a time when almost no one else dared." },
  { cat: "Civil Rights", text: "The Black Panther Party, founded in Oakland in 1966 by Huey Newton and Bobby Seale, established free breakfast programs for children in cities across America — feeding tens of thousands." },
  { cat: "Civil Rights", text: "The 24th Amendment, ratified in 1964, abolished the poll tax — a fee required to vote that had long been used to block poor Black citizens from the ballot box." },
  { cat: "Civil Rights", text: "Claudette Colvin was a 15-year-old who refused to give up her bus seat in Montgomery nine months before Rosa Parks. Civil rights leaders chose Parks as the public face of the movement." },
  { cat: "Civil Rights", text: "The 'Letter from Birmingham Jail,' written by Dr. King in April 1963 from a jail cell, is one of the most powerful and philosophically rigorous defenses of civil disobedience ever written." },
  { cat: "Civil Rights", text: "Ida B. Wells refused to give up her railroad car seat in 1884 — 71 years before Rosa Parks — and sued the railroad. A lower court ruled in her favor before the decision was overturned on appeal." },
  { cat: "Civil Rights", text: "Ruby Bridges was just six years old in 1960 when she became the first Black child to desegregate an all-white elementary school in New Orleans, escorted by federal marshals each day." },
  { cat: "Civil Rights", text: "Fannie Lou Hamer's testimony at the 1964 Democratic National Convention was so powerful that President Johnson called a surprise press conference to pull cameras away from live coverage." },
  { cat: "Civil Rights", text: "James Meredith integrated the University of Mississippi in 1962, requiring the deployment of 500 federal marshals and 3,000 troops after riots broke out on campus." },
  { cat: "Civil Rights", text: "The Student Nonviolent Coordinating Committee (SNCC), founded in 1960, organized sit-ins, Freedom Rides, and dangerous voter registration drives across the Deep South." },
  { cat: "Civil Rights", text: "The Loving v. Virginia Supreme Court ruling in 1967 struck down laws banning interracial marriage in 16 states, ruling such laws unconstitutional under the 14th Amendment." },
  { cat: "Civil Rights", text: "Angela Davis, a professor and activist, became one of the most prominent figures in the Black Power movement and remains a leading voice for prison abolition and social justice." },
  { cat: "Civil Rights", text: "The Civil Rights Act of 1875 guaranteed equal access to public accommodations — but was struck down by the Supreme Court in 1883. It would take 81 years for similar legislation to be enacted again." },
  { cat: "Civil Rights", text: "The NAACP's anti-lynching campaign produced bills that passed the House three times between 1920 and 1940, but each was killed by Senate filibuster. A federal anti-lynching law was not signed until 2022." },
  { cat: "Civil Rights", text: "Ella Baker spent decades organizing for the NAACP, the SCLC, and SNCC, believing in grassroots power rather than individual charismatic leaders — a philosophy she called 'participatory democracy.'" },
  { cat: "Civil Rights", text: "Septima Clark, called the 'Mother of the Movement,' developed the Citizenship School program that taught reading and writing to thousands of Black Southerners to pass literacy tests to vote." },
  { cat: "Civil Rights", text: "The Birmingham Children's Crusade of 1963 sent over 1,000 Black children into the streets to protest segregation. Bull Connor's response — fire hoses and police dogs — shocked the world." },
  { cat: "Civil Rights", text: "Pauli Murray, a Black queer lawyer and activist, laid much of the legal groundwork for both the Civil Rights Act and Title VII, and was later ordained as the first Black female Episcopal priest." },
  { cat: "Civil Rights", text: "Coretta Scott King co-founded the King Center for Nonviolent Social Change in 1968, and campaigned for over 30 years after her husband's assassination to establish his birthday as a federal holiday, succeeding in 1983." },
  { cat: "Civil Rights", text: "The 1964 Freedom Summer brought hundreds of students to Mississippi to register voters. Three workers — James Chaney, Andrew Goodman, and Michael Schwerner — were murdered, bringing national attention to Southern white supremacy." },
  { cat: "Civil Rights", text: "The 13th Amendment abolished slavery in 1865 but included an exception for those convicted of crimes — a clause widely cited by scholars and activists as enabling forced prison labor that continues today." },
  { cat: "Civil Rights", text: "Fred Hampton, 21-year-old chairman of the Illinois Black Panther Party, was assassinated by Chicago police and FBI agents in a pre-dawn raid in 1969. He had been building a powerful multiracial coalition." },

  // ── Music ─────────────────────────────────────────────────────────────────────
  { cat: "Music", text: "Sister Rosetta Tharpe is called the 'Godmother of Rock and Roll.' Her 1930s–40s electric guitar work directly influenced Elvis Presley, Little Richard, and Johnny Cash." },
  { cat: "Music", text: "The blues genre originated in the Deep South among African Americans in the late 19th century, drawing from spirituals, field hollers, work songs, and West African musical traditions." },
  { cat: "Music", text: "Louis Armstrong, born in New Orleans in 1901, became one of the most influential musicians in all of American history, helping define jazz improvisation and popular music itself." },
  { cat: "Music", text: "Ella Fitzgerald, known as the 'First Lady of Song,' won 13 Grammy Awards, is the most nominated woman in Grammy history, and recorded over 200 albums during her career." },
  { cat: "Music", text: "Berry Gordy founded Motown Records in Detroit in 1959 with an $800 loan, building one of the most successful record labels in history and a beacon of Black cultural excellence." },
  { cat: "Music", text: "Aretha Franklin was the first woman inducted into the Rock and Roll Hall of Fame in 1987. She won 18 Grammy Awards and is widely recognized as the greatest soul singer of all time." },
  { cat: "Music", text: "Hip-hop was born at a party hosted by DJ Kool Herc in the South Bronx on August 11, 1973 — widely regarded as the official birth date of one of the world's most influential genres." },
  { cat: "Music", text: "Jimi Hendrix is widely considered the greatest electric guitarist in history, revolutionizing rock music in the late 1960s with albums like 'Are You Experienced' and 'Electric Ladyland.'" },
  { cat: "Music", text: "Michael Jackson's 'Thriller' (1982) is still the best-selling album of all time, with an estimated 70 million copies sold worldwide and a music video that transformed the art form." },
  { cat: "Music", text: "Billie Holiday's 1939 recording of 'Strange Fruit,' a protest against lynching, is widely regarded as one of the first great protest songs in American music history." },
  { cat: "Music", text: "Chuck Berry wrote some of rock and roll's earliest defining songs, including 'Johnny B. Goode,' and is called the 'Father of Rock and Roll' for shaping the genre's entire vocabulary." },
  { cat: "Music", text: "Jazz, born in New Orleans around 1900 by blending African rhythms, blues, and European harmonies, is widely considered America's first original art form." },
  { cat: "Music", text: "Stevie Wonder released five consecutive critically acclaimed studio albums between 1972 and 1976 — a creative stretch many consider the greatest run in pop music history." },
  { cat: "Music", text: "James Brown, the 'Godfather of Soul,' pioneered funk music and is the most-sampled artist in hip-hop history, making him a direct architect of modern popular music." },
  { cat: "Music", text: "Nina Simone was a classically trained pianist who became a defining voice of the civil rights movement through songs like 'Mississippi Goddam' and 'To Be Young, Gifted and Black.'" },
  { cat: "Music", text: "Kendrick Lamar became the first rapper to win the Pulitzer Prize for Music in 2018 for his album 'DAMN.,' recognized for its 'virtuosic song collection unified by its vernacular authenticity.'" },
  { cat: "Music", text: "Prince wrote, performed, and produced much of his debut album at age 19, playing all 27 instruments himself — one of the most remarkable creative achievements in pop history." },
  { cat: "Music", text: "Marvin Gaye's 'What's Going On' (1971) is frequently ranked among the greatest albums ever made, blending lush Motown soul with urgent social commentary." },
  { cat: "Music", text: "The drum was so central to African American expression during slavery that slave owners across the South eventually banned enslaved people from owning or playing drums." },
  { cat: "Music", text: "Miles Davis's 'Kind of Blue' (1959) is the best-selling jazz album of all time and fundamentally changed the language of jazz, introducing modal jazz to a wide audience." },
  { cat: "Music", text: "Beyoncé has won more Grammy Awards than any other artist in history, with 32 wins as of 2024, redefining the scale of what a single artist's Grammy career can look like." },
  { cat: "Music", text: "Scott Joplin, the 'King of Ragtime,' composed 'Maple Leaf Rag' in 1899 — the first sheet music in American history to sell over one million copies." },
  { cat: "Music", text: "The Apollo Theater in Harlem, opened in 1934, launched the careers of Ella Fitzgerald, James Brown, Stevie Wonder, Michael Jackson, and countless others at its legendary Amateur Night." },
  { cat: "Music", text: "Bessie Smith, the 'Empress of the Blues,' was the highest-paid Black entertainer of the 1920s and influenced virtually every major blues and jazz singer who followed." },
  { cat: "Music", text: "John Coltrane's 'A Love Supreme' (1965) is considered one of the greatest jazz recordings in history — as much a spiritual work as a musical one — and has never gone out of print." },
  { cat: "Music", text: "Thelonious Monk was one of the most original composers in jazz history, developing a style so idiosyncratic that musicians are still studying and imitating it more than 50 years later." },
  { cat: "Music", text: "Diana Ross and The Supremes had 12 number-one pop hits between 1964 and 1969 — the most of any American group at the time — and helped break Motown acts into the mainstream white market." },
  { cat: "Music", text: "Run-DMC was the first hip-hop group to appear on the cover of Rolling Stone magazine and the first to go platinum, paving the way for hip-hop to be taken seriously by mainstream media." },
  { cat: "Music", text: "Missy Elliott became the first female rapper inducted into the Rock and Roll Hall of Fame in 2023, recognized for a career that fundamentally changed how hip-hop videos and production sounded." },
  { cat: "Music", text: "Nat King Cole became the first African American to host a nationally broadcast television variety show in 1956 — but it was cancelled after one season when sponsors refused to support a Black-hosted program." },
  { cat: "Music", text: "Ella Fitzgerald had a vocal range of three octaves and the ability to improvise — scat singing — with the same harmonic sophistication as any jazz instrumentalist." },
  { cat: "Music", text: "Whitney Houston's version of 'I Will Always Love You' from The Bodyguard (1992) is one of the best-selling singles in music history and held the record as the best-selling single by a woman for over two decades." },
  { cat: "Music", text: "Marvin Gaye's 'What's Going On' was initially rejected by Motown executives who thought it was too political. Gaye fought for its release and it became the label's best-selling single at the time." },
  { cat: "Music", text: "Gospel music was the foundation for virtually every major form of American popular music — soul, R&B, rock, and hip-hop — with its call-and-response, improvisation, and emotional intensity." },
  { cat: "Music", text: "The Fisk Jubilee Singers, a touring choir from Fisk University founded in 1871, introduced African American spirituals to international audiences and helped save the university from bankruptcy." },
  { cat: "Music", text: "Robert Johnson, the Delta blues musician, recorded only 29 songs before his death at 27, yet those recordings influenced every rock musician who followed — from Eric Clapton to Keith Richards." },
  { cat: "Music", text: "Mahalia Jackson, the 'Queen of Gospel,' was described by Duke Ellington as 'the greatest singer in the world,' and she sang at both President Kennedy's inauguration and Dr. King's funeral." },
  { cat: "Music", text: "Public Enemy's 'It Takes a Nation of Millions to Hold Us Back' (1988) was the first hip-hop album widely recognized by critics as a work of literary and political sophistication equal to any genre." },
  { cat: "Music", text: "The Chitlin' Circuit was a network of safe venues across the South and Midwest where Black performers could perform for Black audiences during segregation — the training ground for countless legends." },

  // ── Sports ────────────────────────────────────────────────────────────────────
  { cat: "Sports", text: "Jesse Owens won four gold medals at the 1936 Berlin Olympics, directly dismantling Hitler's claims of Aryan racial superiority on the world stage." },
  { cat: "Sports", text: "Jackie Robinson broke Major League Baseball's color barrier on April 15, 1947. The date is now celebrated annually as Jackie Robinson Day across all of MLB." },
  { cat: "Sports", text: "Muhammad Ali is widely regarded as the greatest boxer of all time. He was also a prominent civil rights activist who refused military induction and sacrificed years of his career for his beliefs." },
  { cat: "Sports", text: "Serena Williams has won 23 Grand Slam singles titles in the Open Era — the most by any player — and is widely considered the greatest tennis player in history, male or female." },
  { cat: "Sports", text: "Arthur Ashe became the first Black man to win Wimbledon, the U.S. Open, and the Australian Open, and used his platform tirelessly as a champion for human rights." },
  { cat: "Sports", text: "Wilma Rudolph was told as a child she would never walk normally after having polio and scarlet fever. She went on to win three gold medals at the 1960 Rome Olympics, becoming the world's fastest woman." },
  { cat: "Sports", text: "The Harlem Globetrotters were founded in 1926 and became global ambassadors for basketball and Black athletic excellence, performing in over 120 countries across their history." },
  { cat: "Sports", text: "Jack Johnson became the first Black heavyweight boxing champion in 1908, triggering such fierce backlash that Congress passed a law banning the transport of fight films across state lines." },
  { cat: "Sports", text: "Florence Griffith Joyner, 'FloJo,' set world records in the 100m (10.49s) and 200m (21.34s) at the 1988 Seoul Olympics. Both records still stand today." },
  { cat: "Sports", text: "Bill Russell won 11 NBA championships with the Boston Celtics in 13 seasons and became the first Black head coach in major American professional sports in 1966." },
  { cat: "Sports", text: "Althea Gibson became the first Black athlete to compete at Wimbledon in 1951 and was the first Black person to win a Grand Slam title, paving the way for generations of Black tennis stars." },
  { cat: "Sports", text: "Kareem Abdul-Jabbar scored 38,387 points in his NBA career, holding the all-time scoring record for 39 years until LeBron James surpassed it in 2023." },
  { cat: "Sports", text: "Simone Biles is the most decorated gymnast in World Championship history, with 30 world championship medals, and is widely considered the greatest gymnast of all time." },
  { cat: "Sports", text: "The Negro Leagues produced legendary players including Josh Gibson, Satchel Paige, Cool Papa Bell, and Oscar Charleston — many argued to be as great as any MLB star of their era." },
  { cat: "Sports", text: "The iconic image of Tommie Smith and John Carlos raising their fists at the 1968 Mexico City Olympics became one of the most powerful symbols of protest in sports history." },
  { cat: "Sports", text: "Wilt Chamberlain scored 100 points in a single NBA game on March 2, 1962 — a record that has never been matched in over 60 years of professional basketball." },
  { cat: "Sports", text: "Debi Thomas became the first Black athlete to win a medal at the Winter Olympics when she earned bronze in figure skating at the 1988 Calgary Games." },
  { cat: "Sports", text: "Tiger Woods' victory at the 1997 Masters was by 12 strokes — the largest margin of victory in Masters history at the time — making him the tournament's first Black and first Asian-heritage champion at age 21." },
  { cat: "Sports", text: "Venus and Serena Williams are the only two sisters in history to each win multiple Grand Slam singles titles, and they have played each other in 31 Grand Slam matches." },
  { cat: "Sports", text: "Michael Jordan won six NBA championships, five MVP awards, and six Finals MVP awards with the Chicago Bulls, and is widely considered the greatest basketball player of all time." },
  { cat: "Sports", text: "Hank Aaron broke Babe Ruth's all-time home run record in 1974 while enduring a torrent of racist death threats — the U.S. Post Office assigned a security detail to handle his mail." },
  { cat: "Sports", text: "Jim Brown, Cleveland Browns running back from 1957 to 1965, is widely considered the greatest football player of all time and retired at his athletic peak to pursue civil rights activism." },
  { cat: "Sports", text: "LeBron James surpassed Kareem Abdul-Jabbar as the NBA's all-time leading scorer in 2023 and has also become one of the most influential athlete-activists of his generation." },
  { cat: "Sports", text: "Alice Coachman became the first Black woman to win an Olympic gold medal, winning the high jump at the 1948 London Games — returning home to a parade but barred from shaking the mayor's hand due to segregation." },
  { cat: "Sports", text: "Marshall 'Major' Taylor was the first Black world champion in any sport, winning the world track cycling championship in 1899, and faced brutal racism from competitors and race organizers throughout his career." },
  { cat: "Sports", text: "In 1946, Kenny Washington and Woody Strode became the first Black players to reintegrate the NFL, signing with the Los Angeles Rams a full year before Jackie Robinson broke baseball's color barrier." },
  { cat: "Sports", text: "Gabby Douglas became the first Black gymnast — and the first American gymnast — to win both the individual all-around and team gold medals at the same Olympic Games, in London 2012." },
  { cat: "Sports", text: "Carl Lewis won nine Olympic gold medals over three consecutive Games (1984, 1988, 1992) and was named Sportsman of the Century by the International Olympic Committee." },
  { cat: "Sports", text: "Sugar Ray Robinson, often cited as the greatest pound-for-pound boxer in history, had an amateur record of 85-0 with 69 knockouts before turning professional." },
  { cat: "Sports", text: "Tommie Smith, who raised his fist at the 1968 Olympics, ran the 200m in 19.83 seconds — a world record that stood for 11 years." },
  { cat: "Sports", text: "Dikembe Mutombo, originally from the Democratic Republic of Congo, became one of the greatest shot blockers in NBA history and later built a $29 million hospital in his home city of Kinshasa." },

  // ── Literature & Arts ─────────────────────────────────────────────────────────
  { cat: "Literature & Arts", text: "Toni Morrison became the first African American to win the Nobel Prize in Literature in 1993, honored for novels like 'Beloved,' 'Song of Solomon,' and 'The Bluest Eye.'" },
  { cat: "Literature & Arts", text: "Langston Hughes was a central figure of the Harlem Renaissance whose poetry captured the joys, sorrows, and dreams of African American life with unmatched directness and warmth." },
  { cat: "Literature & Arts", text: "James Baldwin's essays and novels — including 'The Fire Next Time' and 'Go Tell It on the Mountain' — are cornerstones of American literature and moral writing." },
  { cat: "Literature & Arts", text: "Maya Angelou's autobiography 'I Know Why the Caged Bird Sings' (1969) became one of the first nonfiction bestsellers by a Black woman and is now a staple of American literary education." },
  { cat: "Literature & Arts", text: "Gwendolyn Brooks became the first African American to win the Pulitzer Prize, awarded in 1950 for her poetry collection 'Annie Allen,' which depicted life in Chicago's Black neighborhoods." },
  { cat: "Literature & Arts", text: "Zora Neale Hurston's novel 'Their Eyes Were Watching God' (1937) was out of print for decades before Alice Walker championed its rediscovery in the 1970s. It is now a literary classic." },
  { cat: "Literature & Arts", text: "Jacob Lawrence's Migration Series (1940–41), 60 panels depicting the Great Migration northward, was the first work by a Black artist acquired by a major American museum." },
  { cat: "Literature & Arts", text: "Gordon Parks became the first Black photographer and director at Life magazine and later directed 'Shaft' (1971), one of the defining films of the Blaxploitation era." },
  { cat: "Literature & Arts", text: "Jean-Michel Basquiat rose from street graffiti in New York City to become one of the most celebrated Neo-Expressionist painters in history, with works selling for over $100 million today." },
  { cat: "Literature & Arts", text: "Octavia Butler was the first science fiction writer of any background to receive a MacArthur 'Genius' Fellowship, and her speculative novels remain profoundly relevant to questions of race and power." },
  { cat: "Literature & Arts", text: "Colson Whitehead became the first author since John Updike to win back-to-back Pulitzer Prizes for Fiction, for 'The Underground Railroad' (2017) and 'The Nickel Boys' (2020)." },
  { cat: "Literature & Arts", text: "Kara Walker's large-scale silhouette installations explore the antebellum South and the long shadow of slavery in American visual culture with unflinching clarity." },
  { cat: "Literature & Arts", text: "Romare Bearden's collages, blending African American experience with modernist forms, are considered among the most important American artworks of the 20th century." },
  { cat: "Literature & Arts", text: "Alex Haley's 'Roots: The Saga of an American Family' (1976) sparked an unprecedented national wave of interest in genealogy and African American family history." },
  { cat: "Literature & Arts", text: "Richard Wright's 'Native Son' (1940) was the first book by a Black author selected by the Book-of-the-Month Club and became an instant national bestseller." },
  { cat: "Literature & Arts", text: "Lorraine Hansberry was the youngest American playwright and first Black dramatist to win the New York Drama Critics Circle Award, for 'A Raisin in the Sun' in 1959." },
  { cat: "Literature & Arts", text: "Augusta Savage was a Harlem Renaissance sculptor whose powerful work depicted African American life, and she trained a generation of artists including Jacob Lawrence and Norman Lewis." },
  { cat: "Literature & Arts", text: "bell hooks, the author of 'Ain't I a Woman?' and 'Feminist Theory: From Margin to Center,' became one of the most influential cultural critics in American intellectual life over five decades." },
  { cat: "Literature & Arts", text: "W.E.B. Du Bois coined the concept of 'double consciousness' in 'The Souls of Black Folk' (1903) — the sense of 'always looking at one's self through the eyes of others' — still central to discussions of Black identity." },
  { cat: "Literature & Arts", text: "N.K. Jemisin became the first author in history to win the Hugo Award for Best Novel three consecutive years (2016–2018), for each book in her 'Broken Earth' trilogy." },
  { cat: "Literature & Arts", text: "Ralph Ellison's 'Invisible Man' (1952) won the National Book Award and is widely regarded as one of the greatest American novels of the 20th century." },
  { cat: "Literature & Arts", text: "Nikki Giovanni was one of the most celebrated poets of the Black Arts Movement and remains one of the most widely read living American poets." },
  { cat: "Literature & Arts", text: "Gordon Parks's 1961 Life magazine photo essay 'The Fontenelle Family' exposed the devastating realities of poverty in Harlem and changed the national conversation about urban poverty." },
  { cat: "Literature & Arts", text: "Dr. Henry Louis Gates Jr. founded the Hutchins Center for African and African American Research at Harvard and has produced groundbreaking PBS documentary series on Black American genealogy and history." },
  { cat: "Literature & Arts", text: "Phillis Wheatley became the first African American and first enslaved person to publish a book of poetry in 1773 — 'Poems on Various Subjects, Religious and Moral' — when she was approximately 20 years old." },
  { cat: "Literature & Arts", text: "Alice Walker's 'The Color Purple' (1982) won both the Pulitzer Prize and the National Book Award, making Walker the first Black woman to win the Pulitzer for Fiction." },
  { cat: "Literature & Arts", text: "August Wilson's 'Pittsburgh Cycle' — 10 plays covering a century of Black American life, one per decade — is considered one of the most significant dramatic achievements in American theater history." },
  { cat: "Literature & Arts", text: "Ntozake Shange's 1975 theatrical work 'for colored girls who have considered suicide / when the rainbow is enuf' broke new ground by combining poetry, dance, and drama." },
  { cat: "Literature & Arts", text: "Kerry James Marshall's large-scale paintings of Black figures in everyday life have set auction records for living American artists, with 'Past Times' selling for $21.1 million in 2018." },
  { cat: "Literature & Arts", text: "Toni Morrison, in addition to her Nobel Prize, served as an editor at Random House where she championed the work of Angela Davis, Gayl Jones, and other Black writers who might otherwise have gone unpublished." },

  // ── Politics & Firsts ─────────────────────────────────────────────────────────
  { cat: "Politics & Firsts", text: "Barack Obama became the 44th President of the United States in 2009, the first African American ever to hold the nation's highest office." },
  { cat: "Politics & Firsts", text: "Kamala Harris became the first Black American and first person of South Asian descent to serve as Vice President of the United States, inaugurated in January 2021." },
  { cat: "Politics & Firsts", text: "Hiram Revels became the first African American elected to the U.S. Senate in 1870, filling the seat previously held by Jefferson Davis." },
  { cat: "Politics & Firsts", text: "Shirley Chisholm was the first Black woman elected to Congress in 1968, and in 1972 she became the first Black person and first woman to seek a major U.S. party's presidential nomination." },
  { cat: "Politics & Firsts", text: "Colin Powell became the first Black U.S. Secretary of State in 2001, having previously become the first Black National Security Advisor (1987) and Chairman of the Joint Chiefs of Staff (1989)." },
  { cat: "Politics & Firsts", text: "Condoleezza Rice succeeded Colin Powell as Secretary of State in 2005, becoming the first Black woman to hold the position and only the second woman ever." },
  { cat: "Politics & Firsts", text: "Edward Brooke of Massachusetts became the first Black person popularly elected to the U.S. Senate when he won election in 1966, more than 90 years after Reconstruction." },
  { cat: "Politics & Firsts", text: "Douglas Wilder became the first African American elected governor in U.S. history, serving as Governor of Virginia from 1990 to 1994." },
  { cat: "Politics & Firsts", text: "Ursula Burns became the first Black woman CEO of a Fortune 500 company when she took over as CEO of Xerox in 2009." },
  { cat: "Politics & Firsts", text: "P.B.S. Pinchback became the first African American governor when he briefly served as Governor of Louisiana in 1872–73, during Reconstruction." },
  { cat: "Politics & Firsts", text: "Maynard Jackson became the first Black mayor of Atlanta in 1973 and transformed the city into a national hub for Black business, culture, and political power." },
  { cat: "Politics & Firsts", text: "Mary McLeod Bethune, born to formerly enslaved parents, founded a school that grew into Bethune-Cookman University and became the first Black woman to lead a federal agency, advising President FDR." },
  { cat: "Politics & Firsts", text: "Deval Patrick became the first Black governor of Massachusetts in 2007 and only the second Black governor elected in U.S. history at that time." },
  { cat: "Politics & Firsts", text: "Carol Moseley Braun became the first Black woman elected to the U.S. Senate in 1992, representing Illinois." },
  { cat: "Politics & Firsts", text: "The Reconstruction era (1865–1877) saw over 2,000 Black Americans hold political office across the South, including governors, senators, and members of Congress." },
  { cat: "Politics & Firsts", text: "Adam Clayton Powell Jr. represented Harlem in Congress from 1945 to 1971 and served as Chairman of the House Education and Labor Committee, shaping major legislation of the Great Society era." },
  { cat: "Politics & Firsts", text: "The Reconstruction Amendments — the 13th, 14th, and 15th — collectively abolished slavery, guaranteed equal citizenship, and secured voting rights for Black men, fundamentally rewriting the Constitution." },
  { cat: "Politics & Firsts", text: "Stacey Abrams, through Fair Fight Action, registered over 800,000 new voters in Georgia, helping flip the state in 2020 and contributing to the election of two Democratic senators." },
  { cat: "Politics & Firsts", text: "Eric Holder became the first African American Attorney General of the United States when he was confirmed in 2009, later becoming one of the most consequential attorneys general in modern history." },
  { cat: "Politics & Firsts", text: "Lori Lightfoot became the first Black woman and the first openly gay person elected mayor of Chicago in 2019." },

  // ── Military ──────────────────────────────────────────────────────────────────
  { cat: "Military", text: "The Tuskegee Airmen were the first African American military aviators in the U.S. Armed Forces. They flew over 15,000 individual sorties in World War II, earning over 150 Distinguished Flying Crosses." },
  { cat: "Military", text: "The Buffalo Soldiers were Black cavalry and infantry regiments established by Congress in 1866. The name was given to them by Plains Native Americans in respect of their fierce fighting spirit." },
  { cat: "Military", text: "The 54th Massachusetts Infantry, one of the first Black Civil War regiments, became nationally famous for its heroic assault on Fort Wagner in 1863." },
  { cat: "Military", text: "More than 180,000 Black soldiers served in the Union Army during the Civil War, representing approximately 10% of Union forces and playing a crucial role in the Confederate defeat." },
  { cat: "Military", text: "Henry Ossian Flipper became the first African American to graduate from West Point Military Academy in 1877, in the face of intense social isolation from white cadets." },
  { cat: "Military", text: "Dorie Miller was a Black Navy mess cook who took command of a machine gun during the attack on Pearl Harbor in 1941, shooting down enemy aircraft, and was later awarded the Navy Cross." },
  { cat: "Military", text: "The Triple Nickles (555th Parachute Infantry Battalion) were the first Black paratroopers in U.S. history, trained during World War II." },
  { cat: "Military", text: "More than one million Black Americans served in World War II, fighting for freedoms abroad that were still denied to them at home — a contradiction that fueled the postwar civil rights movement." },
  { cat: "Military", text: "Executive Order 9981, signed by President Truman in 1948, desegregated the U.S. Armed Forces — one of the first major federal desegregation actions in American history." },
  { cat: "Military", text: "Robert Smalls was an enslaved man who commandeered a Confederate transport ship in 1862, sailed it to Union forces, and freed himself and his family. He later served five terms in Congress." },
  { cat: "Military", text: "Gen. Frank E. Petersen Jr. became the first Black officer and first Black general in the U.S. Marine Corps, retiring as a lieutenant general after a career spanning five decades." },
  { cat: "Military", text: "The Red Ball Express was the vital supply trucking operation of World War II, in which over 75% of the drivers were Black soldiers, keeping Allied forces supplied as they advanced across France in 1944." },
  { cat: "Military", text: "Harriet Tubman's 1863 Combahee River Raid is believed to be the only military raid in U.S. history planned and led by a woman, liberating over 700 enslaved people in a single night." },
  { cat: "Military", text: "Charity Adams Earley commanded the only all-Black, all-female battalion in the Women's Army Corps stationed overseas during World War II — processing over 6 million pieces of mail." },
  { cat: "Military", text: "Vernon Baker single-handedly attacked and destroyed enemy machine gun positions in Italy in 1945. He was denied the Medal of Honor at the time due to racial discrimination, finally receiving it in 1997." },
  { cat: "Military", text: "Gen. Lloyd Austin became the first Black U.S. Secretary of Defense in 2021, confirmed with broad bipartisan support after his distinguished military career." },
  { cat: "Military", text: "The Montford Point Marines were the first Black Marines, training at a segregated camp in North Carolina from 1942 to 1949. In 2012, Congress awarded them the Congressional Gold Medal." },
  { cat: "Military", text: "The 761st Tank Battalion, the first Black armored unit to see combat in World War II, fought in the Battle of the Bulge and was praised by Gen. Patton as one of the finest tank units in the Army." },
  { cat: "Military", text: "The Harlem Hellfighters (369th Infantry Regiment) fought in World War I under French command and spent more time in continuous combat than any other American unit in the war." },

  // ── Culture & Heritage ────────────────────────────────────────────────────────
  { cat: "Culture & Heritage", text: "Soul food has deep roots in West African cooking and was developed by enslaved Africans who used every part of the animal and grew their own vegetables to sustain their communities." },
  { cat: "Culture & Heritage", text: "Juneteenth, celebrated on June 19, marks the 1865 day enslaved people in Galveston, Texas finally learned of their freedom — more than two years after the Emancipation Proclamation was issued." },
  { cat: "Culture & Heritage", text: "Cornrows are one of the oldest hairstyles in the world, with origins tracing back over 3,000 years to African cultures, long predating their modern associations." },
  { cat: "Culture & Heritage", text: "The Gullah Geechee people of the South Carolina and Georgia coast have preserved some of the most direct and unbroken cultural and linguistic links to West Africa found anywhere in the United States." },
  { cat: "Culture & Heritage", text: "Kwanzaa was created by Dr. Maulana Karenga in 1966 to celebrate seven core principles: unity, self-determination, collective work and responsibility, cooperative economics, purpose, creativity, and faith." },
  { cat: "Culture & Heritage", text: "The Great Migration (1910–1970) saw six million African Americans leave the rural South for Northern and Western cities, profoundly reshaping American politics, music, labor, and culture." },
  { cat: "Culture & Heritage", text: "Kente cloth, woven by the Ashanti people of Ghana, is one of the most widely recognized African textiles in the world and has become a global symbol of African cultural identity and pride." },
  { cat: "Culture & Heritage", text: "The Underground Railroad was not an actual railroad — it was a secret network of safe houses, signals, and routes used by freedom seekers to escape slavery in the antebellum South." },
  { cat: "Culture & Heritage", text: "The tradition of 'call and response' in African American church, music, and public life traces directly back to West African musical and spiritual practices, carried across generations." },
  { cat: "Culture & Heritage", text: "Juneteenth became a federal holiday in the United States on June 17, 2021, when President Biden signed the Juneteenth National Independence Day Act into law." },
  { cat: "Culture & Heritage", text: "African Americans founded the modern Pentecostal movement through the Azusa Street Revival of 1906, led by William J. Seymour — an event that transformed global Christianity." },
  { cat: "Culture & Heritage", text: "Many English words are of African origin, including 'jazz,' 'yam,' 'banjo,' 'okra,' 'gumbo,' 'tote,' 'juke,' and 'funky,' reflecting the profound African influence on American language." },
  { cat: "Culture & Heritage", text: "The historically Black neighborhood of Bronzeville in Chicago, known as the 'Black Metropolis,' became one of the most vibrant African American cultural and political centers during the Great Migration era." },
  { cat: "Culture & Heritage", text: "Historically Black Colleges and Universities (HBCUs) produce approximately 80% of Black judges, 50% of Black lawyers, and 40% of Black doctors in the United States." },
  { cat: "Culture & Heritage", text: "The ring shout — a counterclockwise circle dance performed by enslaved Africans in praise houses — is considered the oldest surviving African American performance tradition." },
  { cat: "Culture & Heritage", text: "The African Methodist Episcopal (AME) Church, founded by Richard Allen in Philadelphia in 1816, was the first independent Black denomination in the United States and a center of civil rights organizing." },
  { cat: "Culture & Heritage", text: "Howard Thurman's 'Jesus and the Disinherited' (1949) deeply influenced Dr. Martin Luther King Jr.'s philosophy of nonviolent resistance. King carried the book throughout the Montgomery Bus Boycott." },
  { cat: "Culture & Heritage", text: "The 'second line' parade tradition in New Orleans — where a jazz band leads a funeral procession and mourners dance behind — is one of the most distinctive African American cultural expressions in the world." },
  { cat: "Culture & Heritage", text: "The phrase 'jump the broom' was a wedding practice used by enslaved people who were legally forbidden from formally marrying. It has since been reclaimed as a meaningful African American wedding tradition." },
  { cat: "Culture & Heritage", text: "The National Museum of African American History and Culture, opened in 2016 in Washington D.C., drew over 20 million visitors in its first five years — the most visited museum in America for years after opening." },
  { cat: "Culture & Heritage", text: "The Schomburg Center in Harlem was originally the personal collection of Arturo Alfonso Schomburg, a Puerto Rican of African descent who spent his life collecting books, art, and manuscripts to prove Black history." },
  { cat: "Culture & Heritage", text: "Black vernacular English (AAVE) is a systematic, rule-governed dialect with roots in West African language patterns that has profoundly shaped American popular language and culture." },
  { cat: "Culture & Heritage", text: "The tradition of 'homegoing' funerals in Black communities — celebrating a life rather than mourning a death, with music, joy, and community — reflects West African beliefs about death as a return to the ancestors." },
  { cat: "Culture & Heritage", text: "The annual Essence Festival in New Orleans, launched in 1995, has become the largest African American cultural event in the world, drawing over 500,000 people annually." },
  { cat: "Culture & Heritage", text: "The concept of the Black church as a social institution has been called 'the most important institution in Black America' — providing community, education, economic resources, and political organizing for centuries." },
  { cat: "Culture & Heritage", text: "Mardi Gras in New Orleans has deep African American cultural roots — from the Zydeco and second-line traditions to the Mardi Gras Indians, Black men who have dressed in elaborate costumes since the 1880s." },
  { cat: "Culture & Heritage", text: "Millions of enslaved Africans and their descendants maintained spiritual connections to their homelands through syncretic traditions including Vodou in Haiti, Candomblé in Brazil, and Santería in Cuba." },
  { cat: "Culture & Heritage", text: "The Harlem Shake — the original 1981 version — was a dance created in Harlem with roots in West African traditional dance, bearing no resemblance to the 2013 internet meme." },

  // ── Film & Television ─────────────────────────────────────────────────────────
  { cat: "Film & Television", text: "Hattie McDaniel won the Academy Award for Best Supporting Actress for 'Gone with the Wind' in 1940, becoming the first Black person to win an Oscar." },
  { cat: "Film & Television", text: "Sidney Poitier became the first Black man to win the Academy Award for Best Actor in 1964 for 'Lilies of the Field,' and used his entire career to transform Hollywood's depiction of Black Americans." },
  { cat: "Film & Television", text: "'Roots' (1977), based on Alex Haley's novel, was one of the most watched television events in American history, with the series finale drawing an estimated 100 million viewers." },
  { cat: "Film & Television", text: "'Black Panther' (2018) became the first superhero film nominated for the Academy Award for Best Picture and grossed over $1.3 billion worldwide, becoming a cultural phenomenon." },
  { cat: "Film & Television", text: "Ava DuVernay's 'Selma' (2014) was the first film directed by a Black woman to be nominated for the Academy Award for Best Picture." },
  { cat: "Film & Television", text: "Oprah Winfrey launched her television show in 1986 and became the first Black female billionaire. Her media empire includes television networks, film production, and a magazine." },
  { cat: "Film & Television", text: "Barry Jenkins' 'Moonlight' (2016) became the first film with an all-Black cast to win the Academy Award for Best Picture, and the first LGBTQ+ film to win the award." },
  { cat: "Film & Television", text: "Diahann Carroll became the first Black woman to star in her own television series in a non-servant role with 'Julia' in 1968, marking a watershed moment in American television." },
  { cat: "Film & Television", text: "'Boyz n the Hood' (1991), directed by John Singleton at age 23, made him the youngest filmmaker and first Black filmmaker ever nominated for the Academy Award for Best Director." },
  { cat: "Film & Television", text: "Tyler Perry built one of the most successful entertainment empires in Hollywood history, becoming the first Black American to own a major film and television production studio outright." },
  { cat: "Film & Television", text: "Cicely Tyson received an honorary Oscar in 2018, recognizing a career spanning seven decades during which she famously only accepted roles that portrayed Black women with dignity." },
  { cat: "Film & Television", text: "Oscar Micheaux, the first major Black film director, made over 40 films between 1919 and 1948, creating an entirely independent Black cinema industry outside of Hollywood that he personally financed and distributed." },
  { cat: "Film & Television", text: "Denzel Washington is one of only two Black actors to win multiple Academy Awards, and his work in 'Training Day,' 'Malcolm X,' and 'Fences' spans one of the most celebrated acting careers in Hollywood history." },
  { cat: "Film & Television", text: "The TV show 'The Cosby Show' (1984–1992) consistently ranked as the number one show in America and is widely credited with changing how Black families were portrayed on mainstream American television." },
  { cat: "Film & Television", text: "Shonda Rhimes became the first Black woman to create and run a top-10 network drama with 'Grey's Anatomy,' and built a television empire at ABC that dominated prime-time television for a decade." },
  { cat: "Film & Television", text: "Viola Davis became the first Black woman to win the Emmy, SAG, Tony, and Oscar acting awards, cementing her status as the most decorated actress of her generation." },
  { cat: "Film & Television", text: "Lena Horne was one of the first Black performers to sign a long-term contract with a major Hollywood studio (MGM, 1942), though she was often filmed in scenes that could be cut for Southern audiences — a painful compromise she later refused to make." },
  { cat: "Film & Television", text: "Spike Lee's 'Do the Right Thing' (1989) is one of the most critically acclaimed American films of its era and was controversially passed over for the Best Picture Oscar, generating a cultural debate that continues today." },
  { cat: "Film & Television", text: "'Living Single' (1993), created by Yvette Lee Bowser, was the first sitcom with an all-Black female lead cast and later served as the template for 'Friends,' which launched the following year." },
  { cat: "Film & Television", text: "'A Raisin in the Sun' by Lorraine Hansberry (1959) was the first play by a Black woman produced on Broadway, and the first directed by a Black director (Lloyd Richards) in 58 years." },

  // ── African Heritage ──────────────────────────────────────────────────────────
  { cat: "African Heritage", text: "Mansa Musa, emperor of the Mali Empire in the 14th century, is considered the wealthiest person who has ever lived, with an estimated fortune equivalent to $400 billion in today's dollars." },
  { cat: "African Heritage", text: "Timbuktu, in present-day Mali, was a major center of Islamic scholarship and global trade in the 14th–15th centuries, home to the University of Sankore with 25,000 students." },
  { cat: "African Heritage", text: "The Transatlantic Slave Trade, which lasted from the 16th to the 19th century, forcibly transported an estimated 12–15 million Africans to the Americas in one of history's greatest crimes against humanity." },
  { cat: "African Heritage", text: "The Haitian Revolution (1791–1804) was the only successful slave revolution in world history, resulting in the founding of Haiti as the first Black republic and the second independent nation in the Western Hemisphere." },
  { cat: "African Heritage", text: "Toussaint L'Ouverture, formerly enslaved, led the Haitian Revolution and became one of the most brilliant military strategists of his era, defeating the armies of Spain, Britain, and France." },
  { cat: "African Heritage", text: "The Kingdom of Axum (100–940 CE), in present-day Ethiopia and Eritrea, was one of the world's great ancient empires, controlling key trade routes between Africa, Arabia, and India." },
  { cat: "African Heritage", text: "The Bantu expansion (c. 1000 BCE–1500 CE) was one of the most significant population movements in human history, spreading language, iron-working, and agriculture across sub-Saharan Africa." },
  { cat: "African Heritage", text: "The Kingdom of Kush in present-day Sudan predates some phases of ancient Egypt, developed its own distinct writing system called Meroitic script, and ruled Egypt itself as pharaohs for nearly a century." },
  { cat: "African Heritage", text: "Over 35 million people of African descent live in Brazil — the largest African diaspora population outside of Africa — carrying cultural traditions that trace directly to West and Central Africa." },
  { cat: "African Heritage", text: "The Yoruba people of West Africa developed Ifá, one of the world's most complex spiritual traditions, which UNESCO recognized as part of humanity's intangible cultural heritage." },
  { cat: "African Heritage", text: "The Zulu Kingdom under Shaka Zulu (1816–1828) built one of the most powerful military empires in African history, with innovative tactics — the 'bull horn' formation — still studied in military schools." },
  { cat: "African Heritage", text: "African cultures had developed over 300 distinct writing systems before European colonization, including Ge'ez, Tifinagh, Nsibidi, and Vai — disproving the colonial myth that Africa had no written tradition." },
  { cat: "African Heritage", text: "Sundiata Keita, founder of the Mali Empire in 1235, is the subject of the Epic of Sundiata — one of the greatest oral epics in African history, still performed by griots today." },
  { cat: "African Heritage", text: "The Great Zimbabwe, built between the 11th and 15th centuries, was a major city and capital of the Kingdom of Zimbabwe, featuring massive stone walls constructed without mortar." },
  { cat: "African Heritage", text: "The Moors, the North and West African Muslims who conquered and ruled much of Iberia from 711 to 1492, introduced Europe to advanced mathematics, astronomy, medicine, and architecture during the European Dark Ages." },
  { cat: "African Heritage", text: "The Benin Kingdom of present-day Nigeria produced the Benin Bronzes — a collection of brass sculptures of extraordinary artistry that influenced Picasso and other modernist artists when exhibited in Europe." },
  { cat: "African Heritage", text: "Queen Nzinga of Ndongo and Matamba (1583–1663), in present-day Angola, was a brilliant military strategist and diplomat who resisted Portuguese colonization for decades." },
  { cat: "African Heritage", text: "Queen Yaa Asantewaa of the Ashanti Empire led the last major war of resistance against British colonialism in West Africa in 1900, known as the War of the Golden Stool, personally commanding her troops in battle at age 60." },
  { cat: "African Heritage", text: "The Great Rift Valley in East Africa is considered the cradle of humanity — the region where the earliest evidence of Homo sapiens has been found, confirming Africa as the origin point of all human life on Earth." },
  { cat: "African Heritage", text: "Ethiopia is the only African nation to have successfully resisted European colonization during the Scramble for Africa, defeating Italy at the Battle of Adwa in 1896, inspiring anti-colonial movements worldwide." },
  { cat: "African Heritage", text: "The Dogon people of Mali possessed detailed astronomical knowledge about Sirius B — including its mass, orbit, and 50-year cycle — long before Western scientists could observe the star with telescopes." },
  { cat: "African Heritage", text: "The Songhai Empire, which reached its peak under Askia Muhammad in the late 15th century, was one of the largest empires in African history, encompassing most of West Africa." },
  { cat: "African Heritage", text: "Anansi the spider, the trickster folk hero of West African Akan tradition, was carried to the Caribbean and American South by enslaved Africans and became a foundational figure in Black storytelling tradition." },
  { cat: "African Heritage", text: "The abolitionist movement in Britain was significantly energized by the testimony of formerly enslaved Africans, most notably Olaudah Equiano, whose autobiography (1789) became a bestseller and swayed public opinion." },

  // ── Business & Entrepreneurship ───────────────────────────────────────────────
  { cat: "Business & Entrepreneurship", text: "Madam C.J. Walker became the first self-made female millionaire in America — of any race — in the early 1900s, building a hair care empire and employing thousands of Black women salespeople." },
  { cat: "Business & Entrepreneurship", text: "The Greenwood District of Tulsa, Oklahoma, known as 'Black Wall Street,' was one of the most prosperous Black communities in American history before it was deliberately destroyed in the 1921 Tulsa Race Massacre." },
  { cat: "Business & Entrepreneurship", text: "John H. Johnson founded Johnson Publishing Company in 1942, creating Ebony and Jet magazines — the most widely read Black publications in U.S. history, reaching millions of readers for decades." },
  { cat: "Business & Entrepreneurship", text: "Robert Abbott founded The Chicago Defender in 1905. The newspaper became one of the most powerful voices for African American civil rights and helped spark the Great Migration northward." },
  { cat: "Business & Entrepreneurship", text: "Berry Gordy turned an $800 loan into Motown Records, one of the most successful record labels in history, making it the largest Black-owned business in the United States for many years." },
  { cat: "Business & Entrepreneurship", text: "Bob Johnson founded BET (Black Entertainment Television) in 1980 and sold it to Viacom in 2001 for $3 billion, becoming the first Black American billionaire." },
  { cat: "Business & Entrepreneurship", text: "Daymond John founded FUBU ('For Us By Us') in his mother's Queens home with $40 and grew it into a $6 billion streetwear brand by the late 1990s." },
  { cat: "Business & Entrepreneurship", text: "Reginald F. Lewis became the first Black American to build a billion-dollar business empire when he acquired Beatrice International in 1987 in a $985 million leveraged buyout." },
  { cat: "Business & Entrepreneurship", text: "A.G. Gaston, born to sharecroppers in Alabama in 1892, built a business empire worth hundreds of millions of dollars, including insurance companies, banks, a hotel, and construction firms." },
  { cat: "Business & Entrepreneurship", text: "Sam Cooke founded his own record label and publishing company, becoming one of the first Black artists to own his masters — a business model that influenced generations of artists including Prince and Jay-Z." },
  { cat: "Business & Entrepreneurship", text: "Magic Johnson built a business empire worth over $1 billion after retiring from basketball, investing in urban communities that larger corporations had long neglected." },
  { cat: "Business & Entrepreneurship", text: "Cathy Hughes founded Radio One in 1980 from a single Washington D.C. radio station, eventually building it into the largest Black-owned broadcasting company in the United States." },
  { cat: "Business & Entrepreneurship", text: "Jay-Z, born Shawn Carter, became the first rapper to become a billionaire through a business empire spanning music, sports representation, alcohol brands, and venture capital." },
  { cat: "Business & Entrepreneurship", text: "Robert F. Smith, founder of Vista Equity Partners, is the wealthiest Black American in history, and in 2019 he surprised the graduating class of Morehouse College by paying off all of their student loan debt — approximately $34 million." },
  { cat: "Business & Entrepreneurship", text: "The first Black-owned bank in the United States was the Savings Bank of the Grand Fountain United Order of True Reformers, founded in Richmond, Virginia in 1888." },
  { cat: "Business & Entrepreneurship", text: "Janice Bryant Howroyd became the first Black woman to own a billion-dollar company when ActOne Group, her staffing and human resources firm, reached that milestone." },
  { cat: "Business & Entrepreneurship", text: "Tyler Perry's production studio in Atlanta, built on a former Confederate army base, is the largest privately-owned studio campus in the United States." },
  { cat: "Business & Entrepreneurship", text: "Mellody Hobson became chair of Starbucks and co-CEO of Ariel Investments, one of the largest Black-owned investment firms in the country, and is a leading voice for diversity in corporate America." },

  // ── Education & Scholarship ───────────────────────────────────────────────────
  { cat: "Education & Scholarship", text: "Howard University, founded in 1867 in Washington D.C., is one of the most prestigious HBCUs and has produced more Black Ph.D.s than any other university in the world." },
  { cat: "Education & Scholarship", text: "W.E.B. Du Bois became the first African American to earn a Ph.D. from Harvard University in 1895, then co-founded the NAACP and wrote 'The Souls of Black Folk,' a foundational text of Black intellectual life." },
  { cat: "Education & Scholarship", text: "Booker T. Washington founded the Tuskegee Normal and Industrial Institute in Alabama in 1881 with a $2,000 state appropriation, building the school largely through the labor of students themselves." },
  { cat: "Education & Scholarship", text: "Frederick Douglass taught himself to read as an enslaved person. He later wrote one of the most influential autobiographies in American history and became the most photographed American of the 19th century." },
  { cat: "Education & Scholarship", text: "Charles Hamilton Houston, Thurgood Marshall's mentor, was the NAACP's chief legal counsel and strategically dismantled school segregation case by case for two decades before Brown v. Board of Education." },
  { cat: "Education & Scholarship", text: "Dr. Mary McLeod Bethune started her school in Daytona Beach with $1.50, five girl students, and packing crates for desks. It grew into Bethune-Cookman University, a four-year accredited institution." },
  { cat: "Education & Scholarship", text: "Dr. Carter G. Woodson founded 'Negro History Week' in 1926 — the precursor to Black History Month — choosing February for its proximity to the birthdays of Abraham Lincoln and Frederick Douglass." },
  { cat: "Education & Scholarship", text: "The Freedom Schools, established by SNCC in Mississippi in 1964, provided Black children with rigorous academic and civic education that the segregated public school system deliberately denied them." },
  { cat: "Education & Scholarship", text: "Spelman College in Atlanta, founded in 1881, is the oldest HBCU for women in the United States and consistently ranks among the top liberal arts colleges in America." },
  { cat: "Education & Scholarship", text: "The Schomburg Center for Research in Black Culture in Harlem is one of the world's leading research libraries devoted to the history and culture of African Americans and the African diaspora." },
  { cat: "Education & Scholarship", text: "Dr. John Hope Franklin, the dean of African American historians, wrote 'From Slavery to Freedom' (1947), which has sold over 3 million copies and remains the definitive textbook of African American history." },
  { cat: "Education & Scholarship", text: "Howard University Law School, founded in 1869, trained the lawyers who argued Brown v. Board of Education and dozens of other landmark civil rights cases under Charles Hamilton Houston's strategic leadership." },
  { cat: "Education & Scholarship", text: "Morehouse College in Atlanta, founded in 1867, is the only historically Black liberal arts college for men in the United States, with alumni including Martin Luther King Jr., Spike Lee, and Samuel L. Jackson." },
  { cat: "Education & Scholarship", text: "Tuskegee University produced George Washington Carver, whose research on peanuts, sweet potatoes, and other crops helped transform Southern agriculture and produced hundreds of industrial applications." },
  { cat: "Education & Scholarship", text: "The Talented Tenth was W.E.B. Du Bois's concept that educated Black professionals and intellectuals had a responsibility to uplift the entire race through education and civic leadership." },
  { cat: "Education & Scholarship", text: "Xavier University of Louisiana, an HBCU, is the top producer of Black students who go on to earn medical degrees in the United States, year after year." },

  // ── Resistance & Revolution ───────────────────────────────────────────────────
  { cat: "Resistance & Revolution", text: "Harriet Tubman made 13 missions to rescue approximately 70 enslaved people via the Underground Railroad and later said, 'I never ran my train off the track and I never lost a passenger.'" },
  { cat: "Resistance & Revolution", text: "Harriet Tubman served as a Union spy and scout during the Civil War, leading an armed raid at the Combahee River in 1863 that liberated over 700 enslaved people in a single night." },
  { cat: "Resistance & Revolution", text: "Nat Turner led one of the most significant slave rebellions in U.S. history in 1831 in Southampton County, Virginia. His revolt intensified national debates over slavery and led to stricter slave codes." },
  { cat: "Resistance & Revolution", text: "Denmark Vesey, a freed enslaved man, organized one of the largest planned slave revolts in U.S. history in 1822. Though thwarted, he became an enduring symbol of resistance." },
  { cat: "Resistance & Revolution", text: "Sojourner Truth, born Isabella Baumfree, was an abolitionist and women's rights activist who delivered the legendary 'Ain't I a Woman?' speech in 1851 in Akron, Ohio." },
  { cat: "Resistance & Revolution", text: "The phrase '40 acres and a mule' comes from Special Field Order No. 15, issued by Gen. Sherman in January 1865 — a promise of land to freedpeople that was soon revoked by President Andrew Johnson." },
  { cat: "Resistance & Revolution", text: "Solomon Northup was a free Black man who was kidnapped in Washington D.C. and sold into slavery, spending 12 years enslaved before being freed. His memoir became the basis for '12 Years a Slave.'" },
  { cat: "Resistance & Revolution", text: "The Black Codes enacted across the South after the Civil War were state laws designed to restrict the freedom of Black Americans and trap them in low-wage labor, effectively re-creating conditions of slavery." },
  { cat: "Resistance & Revolution", text: "Marcus Garvey's Universal Negro Improvement Association (UNIA) was the largest Black mass movement in history during the 1920s, with chapters in 43 countries and millions of members worldwide." },
  { cat: "Resistance & Revolution", text: "The Combahee River Collective, a Black feminist organization founded in 1974, produced a 1977 statement that coined the concept of 'identity politics' and laid the intellectual groundwork for intersectionality." },
  { cat: "Resistance & Revolution", text: "The Amistad case of 1839–1841, in which Africans who had seized control of a slave ship were ultimately freed by the Supreme Court, became one of the most famous abolitionist cases in American history." },
  { cat: "Resistance & Revolution", text: "The 1811 German Coast Uprising in Louisiana, led by Charles Deslondes, was the largest slave rebellion in U.S. history, involving between 200 and 500 enslaved people." },
  { cat: "Resistance & Revolution", text: "Henry 'Box' Brown mailed himself in a wooden box from Richmond, Virginia to Philadelphia in 1849 — a 27-hour journey — to freedom." },
  { cat: "Resistance & Revolution", text: "The Exodusters were thousands of Black Southerners who fled to Kansas in 1879, seeking freedom from the violent racial terror that had intensified after the end of Reconstruction." },
  { cat: "Resistance & Revolution", text: "Bayard Rustin introduced Dr. King to the philosophy of Mahatma Gandhi and helped develop the nonviolent direct action tactics that defined the civil rights movement — before helping organize the March on Washington." },
  { cat: "Resistance & Revolution", text: "The Great Dismal Swamp, a vast wilderness on the Virginia-North Carolina border, was home to maroon communities of escaped enslaved people for over 200 years." },
  { cat: "Resistance & Revolution", text: "The Niagara Movement, founded by W.E.B. Du Bois and 28 other Black leaders in 1905, demanded full civil rights, voting rights, and an end to racial discrimination — laying the groundwork for the NAACP." },
  { cat: "Resistance & Revolution", text: "Frederick Douglass escaped slavery in 1838 by disguising himself as a free Black sailor, traveling by train and boat from Baltimore to New York, later refusing to reveal the method to protect those who helped him." },

  // ── NASA & Science ────────────────────────────────────────────────────────────
  { cat: "NASA & Science", text: "Katherine Johnson's orbital mechanics calculations were so trusted that astronaut John Glenn refused to fly unless she personally verified the computer's trajectory numbers before his 1962 orbital mission." },
  { cat: "NASA & Science", text: "Katherine Johnson, Dorothy Vaughan, and Mary Jackson were 'human computers' at NASA whose calculations were essential to the success of early U.S. space missions, as depicted in 'Hidden Figures.'" },
  { cat: "NASA & Science", text: "Dorothy Vaughan became NASA's first Black manager and taught herself and her entire computing section the FORTRAN programming language, making them indispensable in the early computer age." },
  { cat: "NASA & Science", text: "Mary Jackson became NASA's first Black female engineer in 1958, and in her later career advocated for the hiring and promotion of women and minorities throughout the agency." },
  { cat: "NASA & Science", text: "Dr. Jemison's 1992 space shuttle mission made her the first Black woman in space. She carried a photo of Bessie Coleman — the first Black woman to earn a pilot's license — as a tribute." },
  { cat: "NASA & Science", text: "Dr. Bernard Harris became the first African American to walk in space when he performed an EVA during Space Shuttle Discovery's 1995 mission." },
  { cat: "NASA & Science", text: "Dr. Guion Bluford became the first African American in space in 1983, flying aboard the Space Shuttle Challenger on mission STS-8." },
  { cat: "NASA & Science", text: "Dr. Ronald McNair, one of the first Black NASA astronauts, died in the Challenger disaster of 1986. He had played saxophone in space on a previous mission — the first musical instrument played in orbit." },
  { cat: "NASA & Science", text: "Dr. George Carruthers invented the first ultraviolet camera/spectrograph for use in space, used aboard Apollo 16 in 1972, providing the first moon-based astronomical observations." },
  { cat: "NASA & Science", text: "Dr. Christine Darden, NASA mathematician and engineer, was a leading expert in sonic boom minimization who spent decades working to make supersonic commercial flight a viable reality." },
  { cat: "NASA & Science", text: "Dr. Victor Glover became the first Black astronaut to serve as a crew member on a long-duration mission to the International Space Station, arriving in 2020." },
  { cat: "NASA & Science", text: "Nichelle Nichols, after her Star Trek fame, was recruited by NASA in 1977 to help recruit the first diverse astronaut class — which included the first Black, Asian, and female astronauts in the U.S. program." },
  { cat: "NASA & Science", text: "Dr. Warren Washington is one of the world's foremost climate scientists and helped develop the first global climate models at the National Center for Atmospheric Research." },
  { cat: "NASA & Science", text: "Dr. Jedidah Isler became the first Black woman to earn a Ph.D. in astrophysics from Yale University, specializing in the study of blazars — active galactic nuclei that blast jets of energy toward Earth." },

  // ── Icons & Trailblazers ──────────────────────────────────────────────────────
  { cat: "Icons & Trailblazers", text: "Josephine Baker was a groundbreaking entertainer in Paris, a French Resistance spy in World War II, and marched alongside Dr. King at the 1963 March on Washington — one of history's most extraordinary lives." },
  { cat: "Icons & Trailblazers", text: "Josephine Baker adopted 12 children of different races and nationalities, calling them her 'Rainbow Tribe' — a living statement against racism and for the possibility of universal human brotherhood." },
  { cat: "Icons & Trailblazers", text: "Paul Robeson was one of the most multitalented Americans of the 20th century: All-American athlete, Columbia Law School graduate, world-famous singer, acclaimed actor, and fierce civil rights activist." },
  { cat: "Icons & Trailblazers", text: "Benjamin Banneker, a free Black man, helped survey the land for Washington D.C. in 1791 and published an almanac with astronomical calculations alongside letters calling on Thomas Jefferson to end slavery." },
  { cat: "Icons & Trailblazers", text: "Frederick Douglass became the most photographed American of the 19th century, deliberately sitting for portraits to create dignified, authoritative images of a Black man — a counter to racist caricature." },
  { cat: "Icons & Trailblazers", text: "Dr. Martin Luther King Jr.'s 'I Have a Dream' speech, delivered before 250,000 people at the Lincoln Memorial on August 28, 1963, is widely considered one of the greatest speeches in all of human history." },
  { cat: "Icons & Trailblazers", text: "The Harlem Renaissance of the 1920s produced not only artists and musicians but great thinkers — Marcus Garvey, W.E.B. Du Bois, Alain Locke — who redefined Black intellectual and cultural identity." },
  { cat: "Icons & Trailblazers", text: "The first African American newspaper, Freedom's Journal, was published in New York City on March 16, 1827, with the declaration: 'We wish to plead our own cause; too long have others spoken for us.'" },
  { cat: "Icons & Trailblazers", text: "Bessie Coleman became the first Black American and first Native American to earn a pilot's license in 1921 — she had to travel to France to get it because American flight schools refused to accept her." },
  { cat: "Icons & Trailblazers", text: "The Black Is Beautiful movement of the 1960s encouraged African Americans to embrace their natural beauty and reject Eurocentric standards — a cultural shift that transformed fashion, media, and self-perception." },
  { cat: "Icons & Trailblazers", text: "The Black Arts Movement of the 1960s–70s, often called the artistic wing of Black Power, produced poetry, theater, and visual art that insisted Black creative work be judged on its own cultural terms." },
  { cat: "Icons & Trailblazers", text: "Kwame Ture (Stokely Carmichael) popularized the phrase 'Black Power' during a 1966 march in Mississippi, sparking a national debate about Black identity, self-determination, and liberation." },
  { cat: "Icons & Trailblazers", text: "Shirley Ann Jackson became the first Black woman to earn a Ph.D. from MIT in 1973, and later became the first Black woman to chair the U.S. Nuclear Regulatory Commission." },
  { cat: "Icons & Trailblazers", text: "Colin Kaepernick's decision to kneel during the national anthem in 2016 to protest police brutality became one of the most debated acts of protest in sports history, inspiring athletes worldwide." },
  { cat: "Icons & Trailblazers", text: "Harry Belafonte was the first recording artist of any background to sell over one million copies of an album, with his 'Calypso' album in 1956. He spent his entire career linking entertainment to civil rights activism." },
  { cat: "Icons & Trailblazers", text: "James Weldon Johnson wrote 'Lift Every Voice and Sing' in 1900, which became known as the Black National Anthem and has been sung at the opening of every NAACP national convention ever since." },
  { cat: "Icons & Trailblazers", text: "W.E.B. Du Bois lived to age 95, spending his final years in Ghana after renouncing his American citizenship in protest of McCarthyism. He died on August 27, 1963 — the day before the March on Washington." },
  { cat: "Icons & Trailblazers", text: "Shirley Chisholm's campaign slogan in 1972 was 'Unbought and Unbossed' — a declaration that remains one of the most powerful statements of political independence in American electoral history." },
  { cat: "Icons & Trailblazers", text: "Leontyne Price became the first Black soprano to achieve international stardom and was the first Black performer to open a Metropolitan Opera season in 1961, receiving one of the longest standing ovations in the opera's history." },
  { cat: "Icons & Trailblazers", text: "Dr. Cornel West, philosopher and public intellectual, has spent decades bringing the voices of Black prophetic tradition into mainstream academic and political discourse, authoring over 20 books including 'Race Matters' (1993)." },

  // ── Harlem Renaissance ────────────────────────────────────────────────────────
  { cat: "Harlem Renaissance", text: "The Harlem Renaissance of the 1920s and 1930s was an explosion of African American art, literature, music, and intellectual life that made Harlem the cultural capital of Black America." },
  { cat: "Harlem Renaissance", text: "Claude McKay's 1919 poem 'If We Must Die' — written in response to anti-Black violence — was read aloud in the British Parliament during World War II as a call to resist fascism." },
  { cat: "Harlem Renaissance", text: "Alain Locke, the first Black Rhodes Scholar, edited 'The New Negro' (1925), the defining anthology of the Harlem Renaissance, which announced a new era of Black cultural pride." },
  { cat: "Harlem Renaissance", text: "Countee Cullen won more major literary prizes than any other Black writer of his era and was one of the most celebrated poets of the Harlem Renaissance by the time he was 22 years old." },
  { cat: "Harlem Renaissance", text: "The Cotton Club in Harlem, open from 1923 to 1940, was a top-tier jazz venue where Duke Ellington, Cab Calloway, and Louis Armstrong performed — yet it maintained a whites-only admission policy." },
  { cat: "Harlem Renaissance", text: "Duke Ellington composed over 3,000 pieces of music and led one of the most celebrated jazz orchestras in history for more than five decades." },
  { cat: "Harlem Renaissance", text: "Nella Larsen was one of the first African American women to win a Guggenheim Fellowship. Her novel 'Passing' (1929) explored race and identity in ways that resonate powerfully today." },
  { cat: "Harlem Renaissance", text: "The Dark Tower, a literary salon hosted by heiress A'Lelia Walker in her Harlem mansion, was a gathering place for the leading artists, writers, and intellectuals of the Harlem Renaissance." },
  { cat: "Harlem Renaissance", text: "W.E.B. Du Bois edited The Crisis, the NAACP's magazine, from 1910 to 1934, turning it into one of the most influential Black publications in America, with over 100,000 subscribers at its peak." },
  { cat: "Harlem Renaissance", text: "Zora Neale Hurston conducted anthropological fieldwork in the American South and the Caribbean, collecting folk tales and documenting Black cultural practices that might otherwise have been lost." },
  { cat: "Harlem Renaissance", text: "Wallace Thurman's 1926 magazine 'Fire!!' — which included work by Langston Hughes and Zora Neale Hurston — was a radical artistic manifesto of the younger Harlem Renaissance that scandalized older figures." },
  { cat: "Harlem Renaissance", text: "Aaron Douglas's murals at Fisk University are considered some of the finest examples of African American mural painting and his most monumental artistic achievement." },

  // ── Dance & Performance ───────────────────────────────────────────────────────
  { cat: "Dance & Performance", text: "Alvin Ailey's 1960 masterpiece 'Revelations,' set to African American spirituals and blues, is the most performed ballet in history and has been seen by an estimated 23 million people worldwide." },
  { cat: "Dance & Performance", text: "Bill 'Bojangles' Robinson was the highest-paid Black entertainer of the 1930s, known for his extraordinary tap dancing and his role in films alongside Shirley Temple." },
  { cat: "Dance & Performance", text: "Judith Jamison's performance of Alvin Ailey's solo 'Cry' (1971) — dedicated to 'all Black women everywhere' — is one of the most celebrated performances in the history of American dance." },
  { cat: "Dance & Performance", text: "The Lindy Hop, the foundational swing dance born in Harlem in the late 1920s, was a Black dance form that influenced every form of popular social dancing that followed." },
  { cat: "Dance & Performance", text: "Savion Glover revolutionized tap dance in the 1990s, developing a raw, percussive style he called 'hitting' — which honored tap's African American roots while pushing the form into new territory." },
  { cat: "Dance & Performance", text: "Katherine Dunham developed a dance technique — the Katherine Dunham Technique — that combined African, Caribbean, and modern dance forms and trained generations of dancers including Marlon Brando and Eartha Kitt." },
  { cat: "Dance & Performance", text: "Pearl Primus, a pioneer of modern dance, incorporated African and Caribbean ritual movements into her choreography and was a founding figure of Afrocentric dance in America." },
  { cat: "Dance & Performance", text: "Debbie Allen, actress, choreographer, and director, is best known for her work on 'Fame' and has choreographed and directed the Academy Awards telecast multiple times, winning multiple Emmy Awards." },
  { cat: "Dance & Performance", text: "Gregory Hines, one of the greatest tap dancers in American history, helped revive tap as a serious art form in the 1970s–80s through his Broadway and film work, and trained a new generation of tap artists." },
  { cat: "Dance & Performance", text: "The Living Theatre and the Negro Ensemble Company, founded in 1967 by Douglas Turner Ward, trained generations of Black theater artists and produced works that brought Black life to the mainstream American stage." },

  // ── Journalism & Media ────────────────────────────────────────────────────────
  { cat: "Journalism & Media", text: "Ida B. Wells-Barnett was one of America's earliest investigative journalists, using data and first-hand reporting to document hundreds of lynchings at a time when almost no one else dared." },
  { cat: "Journalism & Media", text: "Carl T. Rowan became the first Black member of the National Security Council and served as the first Black ambassador to Finland before becoming one of America's most widely syndicated columnists." },
  { cat: "Journalism & Media", text: "Charlayne Hunter-Gault was one of the first two Black students to enroll at the University of Georgia in 1961 and later became one of the most distinguished journalists at The New York Times and PBS NewsHour." },
  { cat: "Journalism & Media", text: "Robert Maynard became the first African American to own a major metropolitan daily newspaper when he purchased the Oakland Tribune in 1983." },
  { cat: "Journalism & Media", text: "Black-owned radio stations played a crucial role in the civil rights movement, broadcasting information, organizing calls, and providing a platform for Black voices during the 1950s and 1960s." },
  { cat: "Journalism & Media", text: "The Pittsburgh Courier ran the 'Double V' campaign during World War II — victory against fascism abroad and victory against racism at home — reaching 350,000 readers at its peak." },
  { cat: "Journalism & Media", text: "Dorothy Butler Gilliam became the first Black female reporter at The Washington Post in 1961 and spent her career both reporting on and helping to transform the newspaper's coverage of Black Americans." },
  { cat: "Journalism & Media", text: "Max Robinson became the first Black co-anchor of a network news broadcast when he joined ABC's World News Tonight in 1978 — a historic breakthrough in one of television's most visible roles." },
  { cat: "Journalism & Media", text: "Nikole Hannah-Jones created the 1619 Project at The New York Times Magazine in 2019, reframing American history by placing the contributions of Black Americans and the legacy of slavery at the center of the national story, winning the Pulitzer Prize." },
  { cat: "Journalism & Media", text: "The Black press — including the Chicago Defender, Pittsburgh Courier, and Baltimore Afro-American — was a crucial force for civil rights long before the mainstream media began covering discrimination." },

  // ── Fashion ───────────────────────────────────────────────────────────────────
  { cat: "Fashion", text: "Patrick Kelly was the first American — and the first Black designer — to be admitted to the Chambre Syndicale du Prêt-à-Porter in Paris, the governing body of French fashion, in 1988." },
  { cat: "Fashion", text: "Dapper Dan of Harlem pioneered luxury streetwear in the 1980s, creating custom logo-branded clothing for hip-hop artists and athletes years before luxury brands officially entered street culture." },
  { cat: "Fashion", text: "Virgil Abloh became the first Black American artistic director of a French luxury fashion house when he was appointed to Louis Vuitton's menswear division in 2018." },
  { cat: "Fashion", text: "The Afro hairstyle, embraced widely in the late 1960s and '70s, became a powerful political symbol of Black pride, self-determination, and the rejection of Eurocentric beauty standards." },
  { cat: "Fashion", text: "Tracee Ellis Ross became the first Black woman in over three decades to win a Golden Globe Award for Best Actress in a Musical or Comedy TV Series, for 'Black-ish' in 2017." },
  { cat: "Fashion", text: "Ann Lowe, a Black fashion designer from Alabama, designed Jacqueline Bouvier's wedding dress — the most famous bridal gown in American history — but was not credited in press coverage of the Kennedy-Bouvier wedding." },
  { cat: "Fashion", text: "Ozwald Boateng, the British-Ghanaian designer, became the first Black tailor on Savile Row in London in 1994 and dressed some of the most powerful men in the world." },
  { cat: "Fashion", text: "The dashiki, originally a West African garment, became a symbol of Black pride in America during the late 1960s and 1970s, adopted as a visual declaration of African heritage and cultural identity." },
  { cat: "Fashion", text: "Bethann Hardison, a pioneering Black model of the 1970s, later founded the Diversity Coalition to push the fashion industry to use more models of color on its runways." },
  { cat: "Fashion", text: "Multiple U.S. states have passed the CROWN Act (Creating a Respectful and Open World for Natural Hair) to ban workplace discrimination against natural Black hairstyles — a legal recognition of a long-standing cultural battle." },

  // ── Health & Medicine ─────────────────────────────────────────────────────────
  { cat: "Health & Medicine", text: "Dr. Rebecca Lee Crumpler became the first Black woman to earn a medical degree in the United States in 1864. After the Civil War, she treated formerly enslaved people in Virginia." },
  { cat: "Health & Medicine", text: "Provident Hospital in Chicago, founded by Dr. Daniel Hale Williams in 1891, was the first Black-owned hospital in America and trained generations of Black medical professionals." },
  { cat: "Health & Medicine", text: "The Meharry Medical College, founded in 1876 in Nashville, is one of the oldest HBCUs for the health sciences and has trained more than 40% of all Black dentists and physicians in U.S. history." },
  { cat: "Health & Medicine", text: "Dr. Charles R. Drew's blood plasma preservation research during World War II directly saved thousands of soldiers' lives and formed the scientific foundation for every blood bank in the world today." },
  { cat: "Health & Medicine", text: "The Tuskegee Syphilis Study (1932–1972), in which the U.S. government withheld treatment from Black men to observe disease progression, is one of the most notorious medical ethics violations in history." },
  { cat: "Health & Medicine", text: "Dr. Joycelyn Elders became the first Black U.S. Surgeon General when she was appointed by President Clinton in 1993, advocating openly for sex education and drug policy reform." },
  { cat: "Health & Medicine", text: "The National Medical Association, founded in 1895, was established because Black physicians were excluded from the American Medical Association. It remains the largest organization of Black physicians in the U.S." },
  { cat: "Health & Medicine", text: "Dr. Louis T. Wright pioneered the use of antibiotics, particularly Aureomycin, and was the first Black physician to be appointed to the staff of a New York City hospital." },
  { cat: "Health & Medicine", text: "The sickle cell trait, more common in people of African descent as an evolutionary adaptation to malaria, has historically been misused to discriminate against Black Americans in military service and employment." },
  { cat: "Health & Medicine", text: "Dr. Hadiyah-Nicole Green invented a cancer treatment using laser-activated gold nanoparticles that destroys cancer cells without harming surrounding tissue, earning a $1.1 million grant to advance the technology." },

  // ── Comedy & Stand-Up ─────────────────────────────────────────────────────────
  { cat: "Comedy & Stand-Up", text: "Richard Pryor revolutionized stand-up comedy in the 1970s by drawing on his most painful personal experiences — addiction, racism, childhood — with unflinching honesty that changed the entire art form." },
  { cat: "Comedy & Stand-Up", text: "Dick Gregory was one of the first Black comedians to perform for white audiences in mainstream venues in the early 1960s, and used comedy as a vehicle for civil rights activism throughout his career." },
  { cat: "Comedy & Stand-Up", text: "Eddie Murphy's 'Delirious' (1983) and 'Raw' (1987) are two of the most successful and influential stand-up comedy films ever made, helping redefine what stand-up comedy could achieve." },
  { cat: "Comedy & Stand-Up", text: "Dave Chappelle walked away from a $50 million Comedy Central deal in 2005, later returning to become one of the most acclaimed comedians working today, winning multiple Grammy Awards for Best Comedy Album." },
  { cat: "Comedy & Stand-Up", text: "Moms Mabley performed at the Apollo Theater and appeared on television decades before most Black entertainers had such access — becoming one of the best-selling comedy recording artists of the 1960s." },
  { cat: "Comedy & Stand-Up", text: "Flip Wilson's TV show (1970–74) was the second-highest-rated program in America and made him the first Black performer to have a successful television variety show of the modern era." },
  { cat: "Comedy & Stand-Up", text: "Chris Rock's 'Bring the Pain' (1996) is widely considered one of the greatest stand-up comedy specials of all time and is credited with reviving stand-up comedy as a television art form." },
  { cat: "Comedy & Stand-Up", text: "Wanda Sykes became the first Black woman and the first openly gay Black person to perform as a headliner at the White House Correspondents' Dinner in 2009." },
  { cat: "Comedy & Stand-Up", text: "Paul Mooney, stand-up comedian and writer for Richard Pryor's shows and 'In Living Color,' was one of the most fearless and uncompromising voices in Black comedy, known for razor-sharp social commentary." },
  { cat: "Comedy & Stand-Up", text: "Martin Lawrence's sitcom 'Martin' (1992–97) was one of the most popular shows on Fox and helped establish the network, while his stand-up special 'You So Crazy' became a touchstone of 1990s Black comedy." },

  // ── Community & Activism ──────────────────────────────────────────────────────
  { cat: "Community & Activism", text: "The National Urban League, founded in 1910, is one of the oldest and largest community-based civil rights organizations in the United States, focused on economic empowerment." },
  { cat: "Community & Activism", text: "The NAACP Legal Defense Fund, founded separately from the NAACP in 1940 by Thurgood Marshall, has argued more civil rights cases before the Supreme Court than any other legal organization." },
  { cat: "Community & Activism", text: "The Poor People's Campaign, which Dr. King was organizing at the time of his 1968 assassination, called for a guaranteed annual income for all Americans — a vision still debated today." },
  { cat: "Community & Activism", text: "Black Lives Matter, founded in 2013 by Alicia Garza, Patrisse Cullors, and Opal Tometi in response to the acquittal of Trayvon Martin's killer, grew into one of the largest social movements in U.S. history." },
  { cat: "Community & Activism", text: "The Southern Christian Leadership Conference (SCLC), co-founded by Dr. King in 1957, used the Black church as an organizational base, connecting theology with direct action in a uniquely American way." },
  { cat: "Community & Activism", text: "The United Negro College Fund (UNCF), founded in 1944, has helped over 500,000 students attend college with its famous motto: 'A mind is a terrible thing to waste.'" },
  { cat: "Community & Activism", text: "The National Association of Colored Women's Clubs (NACWC), founded in 1896 with the motto 'Lifting As We Climb,' united over 50,000 members nationwide around education, healthcare, and civic engagement." },
  { cat: "Community & Activism", text: "The SNCC trained hundreds of young people in nonviolent direct action tactics, many of whom went on to become lifelong civil rights leaders, legislators, and community organizers." },
  { cat: "Community & Activism", text: "Desmond Tutu, the South African Archbishop and anti-apartheid activist who won the Nobel Peace Prize in 1984, used nonviolent resistance tactics directly inspired by the American civil rights movement." },
  { cat: "Community & Activism", text: "The March for Our Lives (2018) included prominent Black youth activists who connected gun violence to police violence and systemic racism, centering the Black communities most affected by gun deaths." },

  // ── Additional Sports ──────────────────────────────────────────────────────────
  { cat: "Sports", text: "Joe Louis, the 'Brown Bomber,' held the world heavyweight boxing title for nearly 12 years — the longest reign in heavyweight history — and was one of the first African American national heroes." },
  { cat: "Sports", text: "Gale Sayers was considered the most elusive running back in NFL history and was inducted into the Hall of Fame after only five seasons due to injuries — his courage inspired the film 'Brian's Song.'" },
  { cat: "Sports", text: "Magic Johnson and Larry Bird's rivalry throughout the 1980s is widely credited with saving the NBA from declining viewership — transforming it into a global entertainment phenomenon." },
  { cat: "Sports", text: "The first Black players in the NFL were hired in 1920, but the league was fully segregated from 1934 to 1946 — a 'gentleman's agreement' among owners that excluded Black players entirely." },
  { cat: "Sports", text: "Cathy Freeman, of Aboriginal Australian heritage, lit the Olympic cauldron and won gold in the 400m at the 2000 Sydney Olympics, becoming one of the most powerful symbols of indigenous pride in sporting history." },
  { cat: "Sports", text: "Rafer Johnson, the decathlete who won gold at the 1960 Rome Olympics, was present when Robert F. Kennedy was assassinated in 1968 and helped subdue the gunman." },
  { cat: "Sports", text: "Roberto Clemente, the Puerto Rican-born Black baseball player, was the first Latin American inducted into the Baseball Hall of Fame and died in a plane crash on a humanitarian mission to Nicaragua in 1972." },
  { cat: "Sports", text: "Dr. J (Julius Erving) revolutionized basketball in the 1970s by playing above the rim, transforming the sport's aesthetic and directly inspiring the generation of players that included Michael Jordan." },
  { cat: "Sports", text: "Patrick Mahomes became one of the highest-paid players in NFL history and has led the Kansas City Chiefs to multiple Super Bowl victories, cementing his place among the game's all-time greats." },
  { cat: "Sports", text: "Naomi Osaka became the first Asian player to hold the world number-one ranking in tennis and uses her platform to speak about mental health and racial justice with remarkable candor." },

  // ── Additional Music ───────────────────────────────────────────────────────────
  { cat: "Music", text: "Smokey Robinson, described by Bob Dylan as 'America's greatest living poet,' wrote hundreds of classic Motown songs and produced some of the label's most enduring records." },
  { cat: "Music", text: "Earth, Wind & Fire, led by Maurice White, fused jazz, funk, soul, gospel, and African rhythms to create one of the most spiritually expansive catalogs in popular music." },
  { cat: "Music", text: "OutKast's 'Speakerboxxx/The Love Below' (2003) became the first hip-hop album to win the Grammy for Album of the Year, with 'Hey Ya!' becoming one of the most recognizable songs of the decade." },
  { cat: "Music", text: "Dizzy Gillespie and Charlie 'Bird' Parker co-created bebop in the early 1940s — a deliberately complex form of jazz that emphasized virtuosity and was explicitly designed as serious Black art, not dance music." },
  { cat: "Music", text: "Rihanna has sold over 250 million records worldwide, making her the best-selling digital single artist of all time, and her Fenty Beauty line became the first major cosmetics brand to offer foundation in 40 shades." },
  { cat: "Music", text: "Sun Ra, born Herman Poole Blount, was a jazz musician and composer who created a cosmic mythology about Black identity and whose free jazz innovations were decades ahead of their time." },
  { cat: "Music", text: "The genre of R&B — rhythm and blues — was a term coined by music journalist Jerry Wexler in 1948 to replace the racially coded label 'race records' used by the music industry." },
  { cat: "Music", text: "Pharrell Williams produced 'Happy,' which became the first song to debut at number one on the Billboard Hot 100 based solely on digital streams, and has amassed billions of plays worldwide." },
  { cat: "Music", text: "Lil Wayne's 'Tha Carter III' (2008) debuted with over one million copies sold in its first week — the last rap album to sell over a million copies in a single week in the digital era." },
  { cat: "Music", text: "Marvin Gaye's 'Let's Get It On' (1973), 'I Heard It Through the Grapevine' (1968), and 'Sexual Healing' (1982) each defined entirely different eras of soul music, demonstrating his extraordinary range." },

  // ── Additional African Heritage ────────────────────────────────────────────────
  { cat: "African Heritage", text: "The Swahili Coast civilization (8th–16th centuries), stretching from present-day Somalia to Mozambique, was a sophisticated urban trading culture connecting sub-Saharan Africa to Arabia, Persia, India, and China." },
  { cat: "African Heritage", text: "Egypt under the 25th Dynasty (c. 744–656 BCE) was ruled by Nubian pharaohs from present-day Sudan, some of whom presided over some of Egypt's most culturally productive periods." },
  { cat: "African Heritage", text: "The Maroon communities — escaped enslaved Africans who established free settlements in the Caribbean and Americas — waged decades-long guerrilla wars against colonial powers. Jamaica's Maroons signed a peace treaty with Britain in 1739 still recognized today." },
  { cat: "African Heritage", text: "The African continent is home to the world's oldest dated rock art, found in the Blombos Cave in South Africa and estimated to be approximately 73,000 years old." },
  { cat: "African Heritage", text: "The Ashanti Empire of present-day Ghana, known for its gold wealth and sophisticated government, successfully resisted British colonization in four Anglo-Ashanti Wars before finally being subjugated in 1902." },
  { cat: "African Heritage", text: "Africa is home to the world's greatest biodiversity and is the continent of origin for all modern humans — meaning every person on earth is ultimately of African descent." },
  { cat: "African Heritage", text: "The Great Zimbabwe complex at its height housed up to 18,000 people and controlled the gold trade of southeastern Africa, rivaling the great medieval cities of Europe and Asia." },
  { cat: "African Heritage", text: "Olaudah Equiano, whose autobiography 'The Interesting Narrative' (1789) became a bestseller in Britain, was one of the most effective voices of the abolitionist movement, testifying before Parliament about the horrors of the slave trade." },

  // ── Additional Literature & Arts ───────────────────────────────────────────────
  { cat: "Literature & Arts", text: "Chimamanda Ngozi Adichie, the Nigerian novelist, is one of the most widely read African writers of her generation. Her TED Talk 'We Should All Be Feminists' has been viewed tens of millions of times and was sampled by Beyoncé." },
  { cat: "Literature & Arts", text: "Edward P. Jones's 'The Known World' (2003), a novel about a Black slave owner in antebellum Virginia, won the Pulitzer Prize, the National Book Critics Circle Award, and the International IMPAC Dublin Award." },
  { cat: "Literature & Arts", text: "Ta-Nehisi Coates's essay 'The Case for Reparations' (2014) in The Atlantic sparked a nationwide revival of debate about reparations for slavery and was read by millions of Americans." },
  { cat: "Literature & Arts", text: "Aaron Douglas, the visual artist of the Harlem Renaissance, created a distinctive style blending African imagery with Art Deco and cubism that defined the visual aesthetic of the period." },
  { cat: "Literature & Arts", text: "Carrie Mae Weems's Kitchen Table Series (1990) is considered one of the most important photographic works in American art history, exploring Black womanhood, family, and domestic life." },
  { cat: "Literature & Arts", text: "Lucille Clifton was appointed Poet Laureate of Maryland and twice nominated for the Pulitzer Prize for poetry. Her work, renowned for its brevity and power, celebrated Black womanhood and the body." },
  { cat: "Literature & Arts", text: "James Van Der Zee was the premier photographer of the Harlem Renaissance, whose portraits documented Black middle-class life with a dignity and elegance that countered mainstream media stereotypes." },
  { cat: "Literature & Arts", text: "Zadie Smith's debut novel 'White Teeth' (2000), written at age 24, became an international bestseller and established her as one of the most important literary voices of her generation." },

  // ── Additional Culture & Heritage ─────────────────────────────────────────────
  { cat: "Culture & Heritage", text: "The word 'jazz' itself is of uncertain but possibly African American origin, first appearing in print in 1912, and the music it describes remains America's most original and globally influential art form." },
  { cat: "Culture & Heritage", text: "The concept of 'code-switching' — adjusting language, tone, and demeanor to fit into white professional spaces — has been documented as a significant source of psychological stress for Black Americans in the workplace." },
  { cat: "Culture & Heritage", text: "The term 'African American' was popularized nationally by Jesse Jackson in a 1988 press conference, though the idea of emphasizing African heritage in self-identification had roots going back to the early 20th century." },
  { cat: "Culture & Heritage", text: "HBCUs were founded primarily to provide education for Black Americans after the Civil War, when most white colleges and universities refused to admit them. Today there are over 100 HBCUs still operating across the country." },
  { cat: "Culture & Heritage", text: "The National Museum of African American History and Culture was designed by architect David Adjaye and features a distinctive bronze corona inspired by the iron lacework crafted by enslaved African Americans in New Orleans." },
  { cat: "Culture & Heritage", text: "The tradition of passing the hat and collective giving in Black churches dates back to enslaved people pooling their meager resources to buy one another's freedom — a practice that formed the bedrock of Black mutual aid." },
  { cat: "Culture & Heritage", text: "Millions of enslaved Africans secretly passed down knowledge of medicinal plants — West African herbalism — which influenced American folk medicine and formed part of the hidden intellectual heritage of the enslaved." },

  // ── Additional Resistance & Revolution ────────────────────────────────────────
  { cat: "Resistance & Revolution", text: "The National Association of Colored Women, founded in 1896, adopted the motto 'Lifting As We Climb' and organized Black women nationwide around education, healthcare, and civic engagement." },
  { cat: "Resistance & Revolution", text: "The Buffalo Soldiers fought tirelessly as part of the U.S. Army on the Western frontier, a complicated history that some scholars frame as one colonized people being used in the dispossession of another." },
  { cat: "Resistance & Revolution", text: "The Freedmen's Bureau, established by Congress in 1865, was the first federal social welfare agency in American history, providing food, housing, employment, medical care, and education to formerly enslaved people." },
  { cat: "Resistance & Revolution", text: "Blanche Kelso Bruce of Mississippi became the first Black person to serve a full Senate term, serving from 1875 to 1881 during the last years of Reconstruction." },
  { cat: "Resistance & Revolution", text: "The Great Dismal Swamp, spanning Virginia and North Carolina, sheltered some of the largest maroon communities in North America — people who chose permanent freedom in the wilderness over the uncertain path northward." },

  // ── Additional Military ────────────────────────────────────────────────────────
  { cat: "Military", text: "The 92nd Infantry Division, known as the 'Buffalo Division,' was the only Black Army combat division to serve in the European theater during World War II, fighting in the Italian Campaign." },
  { cat: "Military", text: "Mary Eliza Mahoney became the first Black trained professional nurse in the United States in 1879, and Black nurses were formally barred from the Army Nurse Corps until 1948." },
  { cat: "Military", text: "The Korean War (1950–1953) was the first American war fought with desegregated troops following Truman's Executive Order 9981, though racial integration was implemented unevenly in practice." },
  { cat: "Military", text: "Gen. Colin Powell commanded U.S. forces during the Gulf War as Chairman of the Joint Chiefs of Staff — the most powerful military position in the United States — and later oversaw the drawdown of Cold War era forces." },
  { cat: "Military", text: "The Tuskegee Airmen's Red Tail planes became a symbol of pride among the men who flew them — they were among the first Americans to demonstrate conclusively that Black military pilots were as skilled as anyone." },

  // ── Additional Education & Scholarship ────────────────────────────────────────
  { cat: "Education & Scholarship", text: "Fisk University in Nashville, founded in 1866, produced W.E.B. Du Bois, John Hope Franklin, and many other intellectual leaders who shaped American thought and policy." },
  { cat: "Education & Scholarship", text: "The Freedman's Village at Arlington, established in 1863, was one of hundreds of camps where formerly enslaved people organized their own communities, schools, and churches immediately after emancipation." },
  { cat: "Education & Scholarship", text: "Dr. Mae Jemison has stated that the reason she became an astronaut was partly because of Nichelle Nichols's role as Lt. Uhura on Star Trek — a powerful demonstration of the impact of representation in media." },
  { cat: "Education & Scholarship", text: "Virginia Union University's Wyatt Tee Walker was a key strategist for the Southern Christian Leadership Conference, and many HBCUs served as the intellectual and organizational backbones of the civil rights movement." },

  // ── Additional NASA & Science ──────────────────────────────────────────────────
  { cat: "NASA & Science", text: "Dr. Patricia Cowings developed the Autogenic Feedback Training Exercise to prevent space motion sickness — the first American woman to be trained as a scientist-astronaut." },
  { cat: "NASA & Science", text: "Dr. Warren Washington's global climate models, developed over five decades at the National Center for Atmospheric Research, are among the most cited in climate science history." },
  { cat: "NASA & Science", text: "The James Webb Space Telescope, launched in 2021, was built with contributions from teams at NASA's Goddard Space Flight Center — where generations of Black engineers and scientists have made foundational contributions to space exploration." },

  // ── Additional Icons & Trailblazers ───────────────────────────────────────────
  { cat: "Icons & Trailblazers", text: "Stevie Wonder's activism helped establish Martin Luther King Jr.'s birthday as a federal holiday — he recorded 'Happy Birthday' in 1980 specifically to build public support for the legislation." },
  { cat: "Icons & Trailblazers", text: "Coretta Scott King co-founded the King Center for Nonviolent Social Change in Atlanta in 1968, the year of her husband's assassination, and kept his legacy alive for over three decades as a civil rights leader in her own right." },
  { cat: "Icons & Trailblazers", text: "The image of Muhammad Ali standing over Sonny Liston after the first knockdown in their 1965 rematch is one of the most iconic sports photographs in history and a symbol of Black masculine power and defiance." },
  { cat: "Icons & Trailblazers", text: "John Hope Franklin spent 60 years documenting Black American history, earning the Presidential Medal of Freedom and the Library of Congress's Living Legend award, and inspiring generations of historians." },
  { cat: "Icons & Trailblazers", text: "Ella Baker believed that 'strong people don't need strong leaders' and spent over 50 years building grassroots organizations — a philosophy that shaped the entire tradition of community organizing in America." },

  // ── Additional Film & Television ──────────────────────────────────────────────
  { cat: "Film & Television", text: "Richard Pryor's film career in the 1970s and 1980s shattered stereotypes, and his films with Gene Wilder — including 'Silver Streak' and 'Stir Crazy' — were among the most successful comedies of their era." },
  { cat: "Film & Television", text: "'Atlanta' (2016), created by and starring Donald Glover, was the first comedy series in 30 years to win the Emmy for Outstanding Directing for a Comedy Series in its debut season." },
  { cat: "Film & Television", text: "John Singleton's 'Boyz n the Hood' (1991) was filmed in 70 days on a $6 million budget and grossed over $57 million, setting a record for the most profitable directorial debut in Hollywood history at the time." },

  // ── Additional Politics & Firsts ──────────────────────────────────────────────
  { cat: "Politics & Firsts", text: "Muriel Bowser became Washington D.C.'s first two-term female mayor, and in 2020 she ordered 'BLACK LIVES MATTER' painted in enormous yellow letters on the street leading to the White House." },
  { cat: "Politics & Firsts", text: "Charles Rangel represented Harlem in Congress for over 45 years — from 1971 to 2017 — and served as Chairman of the House Ways and Means Committee, shaping tax policy that affected every American." },
  { cat: "Politics & Firsts", text: "Maxine Waters has represented South Los Angeles in Congress since 1990 and is one of the longest-serving and most outspoken Black female members of Congress in U.S. history." },

  // ── Additional Business & Entrepreneurship ────────────────────────────────────
  { cat: "Business & Entrepreneurship", text: "The National Negro Business League, founded by Booker T. Washington in 1900, was one of the first national organizations to promote Black economic development and entrepreneurship." },
  { cat: "Business & Entrepreneurship", text: "Oprah Winfrey's production company Harpo Productions (a reversal of Oprah), founded in 1986, has produced some of the most successful films, books, and television programming in American media." },
  { cat: "Business & Entrepreneurship", text: "Dorothy Height, as president of the National Council of Negro Women, helped build a network of community organizations that provided practical resources to Black families across the country for decades." },

  // ── Additional Harlem Renaissance ─────────────────────────────────────────────
  { cat: "Harlem Renaissance", text: "The Harlem Renaissance gave rise to the 'New Negro' movement — a collective assertion that Black Americans would no longer accept second-class status, and that Black culture was a vital contribution to American civilization." },
  { cat: "Harlem Renaissance", text: "Bessie Smith, the 'Empress of the Blues,' sold millions of records during the Harlem Renaissance era and shaped Harlem's reputation as a center of Black musical innovation." },
  { cat: "Harlem Renaissance", text: "Eubie Blake's 'Shuffle Along' (1921) was the first Broadway musical written and directed by Black Americans, and introduced jazz and Black performance styles to mainstream white audiences for the first time." },

  // ── Additional Comedy & Stand-Up ──────────────────────────────────────────────
  { cat: "Comedy & Stand-Up", text: "Whoopi Goldberg became the first Black woman to win a lead acting Oscar (for 'The Color Purple,' 1986) and is one of the rare performers to have won the EGOT — an Emmy, Grammy, Oscar, and Tony." },
  { cat: "Comedy & Stand-Up", text: "Keegan-Michael Key and Jordan Peele's sketch comedy series 'Key & Peele' (2012–2015) is widely regarded as one of the greatest sketch comedy shows in television history." },

  // ── Additional Dance & Performance ────────────────────────────────────────────
  { cat: "Dance & Performance", text: "Arthur Mitchell, the first Black principal dancer with the New York City Ballet, founded the Dance Theatre of Harlem in 1969 — the first major classical ballet company with a predominantly Black roster." },
  { cat: "Dance & Performance", text: "Michael Jackson's moonwalk, performed live on television for the first time in 1983, is widely considered the most iconic dance move in the history of popular entertainment." },

  // ── Additional Health & Medicine ──────────────────────────────────────────────
  { cat: "Health & Medicine", text: "Dr. W. Montague Cobb spent decades documenting how race was not a valid biological category, challenging scientific racism that was used to justify discrimination in medicine and healthcare." },
  { cat: "Health & Medicine", text: "Dr. David Satcher became the first person to serve as both Assistant Secretary of Health and Surgeon General and was the first Surgeon General to issue a report on mental health, reducing stigma for millions of Americans." },

  // ── Additional Journalism & Media ─────────────────────────────────────────────
  { cat: "Journalism & Media", text: "Ed Bradley of '60 Minutes' was one of the first Black journalists to reach the highest tier of American television news, winning 19 Emmy Awards and covering some of the most important stories of his era." },
  { cat: "Journalism & Media", text: "Gwen Ifill, anchor of 'Washington Week' and co-anchor of 'PBS NewsHour,' moderated two Vice Presidential debates and was one of the most respected political journalists in American television history." },

  // ── Additional Fashion ────────────────────────────────────────────────────────
  { cat: "Fashion", text: "Billy Porter's tuxedo gown at the 2019 Met Gala, designed by Christian Siriano, sparked a global conversation about gender expression, Black identity, and the power of fashion as cultural commentary." },
  { cat: "Fashion", text: "Naomi Campbell became one of the most recognizable supermodels in history and has used her platform to advocate for greater diversity in the fashion industry since the early 1990s." },

  // ── Additional Inventors & Scientists ─────────────────────────────────────────
  { cat: "Inventors & Scientists", text: "Dr. Mae Jemison earned a medical degree from Cornell and spoke fluent Russian, Japanese, and Swahili in addition to English — bringing a rare combination of medical and engineering expertise to the astronaut corps." },
  { cat: "Inventors & Scientists", text: "Lloyd Hall revolutionized the food preservation industry with his research on curing salts and antioxidants, holding over 59 patents and dramatically extending the shelf life of processed foods." },
  { cat: "Inventors & Scientists", text: "Dr. Meredith Gourdine developed electrogasdynamic technology for converting gas directly to electricity and held over 70 patents during his career as a physicist and engineer." },
  { cat: "Inventors & Scientists", text: "Henry T. Sampson co-invented the gamma-electric cell in 1971, a device that generates electricity from radiation — a technology with important applications in space systems and nuclear power." },
  { cat: "Inventors & Scientists", text: "Dr. Aprille Joy Ericsson became the first African American woman to receive a Ph.D. in Engineering from Howard University and went on to work on the design of multiple NASA spacecraft at Goddard Space Flight Center." },
  { cat: "Inventors & Scientists", text: "Dr. Emmett Chappelle developed techniques for detecting bacteria in water and food using bioluminescence, now used by NASA to search for life on other planets and by food safety inspectors worldwide." },

  // ── Additional Civil Rights ────────────────────────────────────────────────────
  { cat: "Civil Rights", text: "Diane Nash, a student activist at Fisk University, helped found SNCC, coordinated the Freedom Rides that challenged interstate bus segregation, and was one of the most effective strategists of the entire civil rights movement." },
  { cat: "Civil Rights", text: "James Lawson, the civil rights tactician who trained John Lewis, Diane Nash, and others, studied Gandhian methods in India specifically to apply them to the American civil rights struggle." },
  { cat: "Civil Rights", text: "The Selma to Montgomery marches of 1965 directly led to the passage of the Voting Rights Act five months later, connecting dramatic direct action to the most significant voting rights legislation in a century." },
  { cat: "Civil Rights", text: "Emmett Till, a 14-year-old boy, was lynched in Mississippi in 1955. His mother Mamie Till's decision to hold an open casket funeral so the world could see what was done to her son galvanized the civil rights movement." },
  { cat: "Civil Rights", text: "The Congressional Black Caucus, founded in 1971, is a legislative organization of African American members of Congress dedicated to using legislative processes to advance the interests of Black Americans and the nation." },
  { cat: "Civil Rights", text: "The Deacons for Defense and Justice was an armed civil rights organization in Louisiana and Mississippi in the 1960s that defended Black communities against Klan violence — a lesser-known but crucial part of the movement's history." },

  // ── Additional Music ───────────────────────────────────────────────────────────
  { cat: "Music", text: "John Coltrane's soprano saxophone performance on 'My Favorite Things' (1961) turned a show tune into a jazz standard and demonstrated how completely Black jazz musicians had transformed the American popular songbook." },
  { cat: "Music", text: "The term 'the dozens' — a form of ritualized verbal sparring and insult exchange that is a precursor to modern rap battles — has roots in the antebellum South and West African oral traditions of competitive wordplay." },
  { cat: "Music", text: "Nina Simone was rejected by the Curtis Institute of Music despite an exceptional audition — a rejection widely attributed to race — and channeled her anger into some of the most politically charged music of the 20th century." },
  { cat: "Music", text: "Harry Belafonte's 'Calypso' (1956) was the first album by any solo artist to sell over a million copies, making Belafonte a crossover star at a time when Black performers rarely achieved mainstream commercial success." },

  // ── Additional African Heritage ────────────────────────────────────────────────
  { cat: "African Heritage", text: "The Zulu people's tradition of praise poetry — izibongo — performed by trained praise singers called izimbongi, is one of the oldest surviving oral literary traditions in Africa, still practiced today." },
  { cat: "African Heritage", text: "The Fulani people, spread across West Africa from Senegal to Sudan, are one of the largest and most widely dispersed ethnic groups on the continent, known for their cattle-herding traditions and scholarly Islamic culture." },
  { cat: "African Heritage", text: "The ancient Egyptian civilization, one of the longest-lived in human history, was deeply African — situated on the African continent, peopled by North Africans, and connected to sub-Saharan Africa through the Nile corridor." },
  { cat: "African Heritage", text: "Queen Nandi, mother of Shaka Zulu, is remembered in Zulu history as a woman of extraordinary strength who raised her son under difficult circumstances to become the most powerful king in Zulu history." },

  // ── Additional Literature & Arts ───────────────────────────────────────────────
  { cat: "Literature & Arts", text: "Toni Cade Bambara's story collection 'Gorilla, My Love' (1972) is considered a landmark of American short fiction, capturing Black urban life with a voice and vernacular unlike anything before it." },
  { cat: "Literature & Arts", text: "John A. Williams's novel 'The Man Who Cried I Am' (1967) is a prophetic thriller that imagines a secret U.S. government plan for racial genocide — one of the most chilling and underread novels in American literature." },
  { cat: "Literature & Arts", text: "Basquiat's most valuable painting, 'Untitled' (1982), sold at auction for $110.5 million in 2017, making him the most valuable American artist at auction and one of the most valuable artists in history." },

  // ── Additional Culture & Heritage ─────────────────────────────────────────────
  { cat: "Culture & Heritage", text: "The tradition of Mardi Gras Indians in New Orleans, in which Black men create elaborate hand-sewn suits with Native American-inspired designs, represents one of the most extraordinary examples of folk artisanship in America." },
  { cat: "Culture & Heritage", text: "The word 'banjo' derives from a West African instrument called the 'banjo' or 'banza,' brought to America by enslaved Africans. The banjo is therefore one of the few truly American musical instruments with African origins." },
  { cat: "Culture & Heritage", text: "Many of the foundational techniques of American quilting — particularly the use of vibrant color and geometric pattern — trace directly to the textile traditions of West Africa, carried over by enslaved people." },

  // ── Additional Film & Television ──────────────────────────────────────────────
  { cat: "Film & Television", text: "Halle Berry became the first Black woman to win the Academy Award for Best Actress in 2002 for 'Monster's Ball,' and in her acceptance speech she dedicated the award to every nameless, faceless woman of color who had come before." },
  { cat: "Film & Television", text: "'Waiting to Exhale' (1995), directed by Forest Whitaker, was one of the first Hollywood studio films to center the experiences and friendships of Black women, grossing over $67 million on a $16 million budget." },
  { cat: "Film & Television", text: "Jordan Peele's 'Get Out' (2017) became the first horror film written and directed by a Black filmmaker to gross over $100 million domestically, and Peele became the first Black writer to win the Oscar for Best Original Screenplay." },

  // ── Additional Education & Scholarship ────────────────────────────────────────
  { cat: "Education & Scholarship", text: "Dr. Alain Locke, the first Black Rhodes Scholar and a Harvard Ph.D., is best remembered as the philosophical architect of the Harlem Renaissance, articulating the idea that Black Americans were forging a new cultural identity." },
  { cat: "Education & Scholarship", text: "Lincoln University in Pennsylvania, founded in 1854, is the oldest degree-granting HBCU in the United States and counts among its alumni Thurgood Marshall, Kwame Nkrumah, and Langston Hughes." },
  { cat: "Education & Scholarship", text: "The Institute of the Black World, founded in Atlanta in 1969, was the first independent Black think tank in the United States, bringing together scholars to rethink Black history and culture on its own terms." },

  // ── Additional Resistance & Revolution ────────────────────────────────────────
  { cat: "Resistance & Revolution", text: "The Port Chicago mutiny of 1944, in which Black Navy sailors refused to load ammunition after a catastrophic explosion killed 320 people, led to a landmark court case and helped accelerate the desegregation of the military." },
  { cat: "Resistance & Revolution", text: "David Walker's 'Appeal to the Coloured Citizens of the World' (1829) was one of the most radical abolitionist documents in American history, explicitly calling on enslaved people to resist their bondage by any means necessary." },
  { cat: "Resistance & Revolution", text: "The Tallahassee Bus Boycott of 1956, the Durham sit-ins of 1957, and dozens of other local campaigns preceded or paralleled the more famous national events — a reminder that the civil rights movement was built by thousands of ordinary people everywhere." },

  // ── Additional Military ────────────────────────────────────────────────────────
  { cat: "Military", text: "Sergeant Major of the Army Julius Gates became the first Black Sergeant Major of the Army in 2019, the highest-ranking enlisted position in the U.S. Army, representing over 460,000 active duty soldiers." },
  { cat: "Military", text: "The Nisei veterans of the 442nd Regimental Combat Team served alongside Black soldiers of the 92nd Infantry Division in Italy — both units fighting for a country that had imprisoned or segregated them at home." },

  // ── Additional NASA & Science ──────────────────────────────────────────────────
  { cat: "NASA & Science", text: "Dr. Lonnie Johnson, beyond inventing the Super Soaker, holds over 100 patents and founded his own engineering firm, Johnson Research & Development, which is working on advanced solid-state battery technology." },
  { cat: "NASA & Science", text: "Annie Easley was one of NASA's first Black computer scientists and mathematicians, whose work on battery technology contributed directly to the development of early hybrid vehicle technology." },
  { cat: "NASA & Science", text: "Dr. Sylvester James Gates Jr. is a theoretical physicist and string theorist who was the first Black physicist elected to the National Academy of Sciences and served on President Obama's Council of Advisors on Science and Technology." },

  // ── Additional Icons & Trailblazers ───────────────────────────────────────────
  { cat: "Icons & Trailblazers", text: "Dr. Dorothy Height served as president of the National Council of Negro Women for 40 years and was described by President Obama as 'the godmother of the Civil Rights Movement.'" },
  { cat: "Icons & Trailblazers", text: "Medgar Evers returned from World War II, tried to vote in Mississippi in 1946, and was turned away by armed white men — an experience that shaped his determination to fight for civil rights at the cost of his life." },
  { cat: "Icons & Trailblazers", text: "June Jordan, poet and activist, founded Poetry for the People at UC Berkeley, believing that poetry was a tool for justice available to everyone — not just the credentialed literary elite." },

  // ── Additional Community & Activism ───────────────────────────────────────────
  { cat: "Community & Activism", text: "The Congress of Racial Equality (CORE), founded in Chicago in 1942, pioneered the use of nonviolent direct action to challenge racial discrimination, including the first organized sit-ins of the civil rights era." },
  { cat: "Community & Activism", text: "Bryan Stevenson, founder of the Equal Justice Initiative, has won release, relief, or reversals for over 140 wrongfully condemned people on death row and built the National Memorial for Peace and Justice in Montgomery, Alabama." },
  { cat: "Community & Activism", text: "The Young Lords, a Puerto Rican street gang turned civil rights organization in New York City and Chicago, allied with the Black Panthers to fight for housing rights, healthcare, and community control in the late 1960s." },

  // ── Additional Harlem Renaissance ─────────────────────────────────────────────
  { cat: "Harlem Renaissance", text: "Louis Armstrong's first visit to Harlem in the early 1920s introduced him to the sophisticated jazz scene that would sharpen and inspire one of the most transformative musical careers in American history." },
  { cat: "Harlem Renaissance", text: "Florence Mills, the most celebrated Black entertainer of the mid-1920s, turned down a role in the Ziegfeld Follies to perform for Black audiences in Harlem, insisting on her dignity and her community." },
  { cat: "Harlem Renaissance", text: "The Harlem Renaissance was not just an American phenomenon — it was part of a global flowering of Black consciousness including the Négritude movement in Paris, Afro-Brazilian modernism, and the Caribbean renaissance." },

  // ── Additional Dance & Performance ────────────────────────────────────────────
  { cat: "Dance & Performance", text: "Josephine Baker's La Revue Nègre, which debuted in Paris in 1925, introduced French audiences to jazz, the Charleston, and an entirely new aesthetic of Black performance that electrified the city and the world." },
  { cat: "Dance & Performance", text: "Patti LaBelle's performance style — combining gospel intensity with theatrical spectacle — influenced virtually every major Black female vocalist of the past five decades, from Whitney Houston to Beyoncé." },
  { cat: "Dance & Performance", text: "Eartha Kitt's cabaret performances and her iconic purring vocal style made her one of the most distinctive entertainers of the 20th century, and her outspoken opposition to the Vietnam War led to a White House blacklisting." },

  // ── Additional Journalism & Media ─────────────────────────────────────────────
  { cat: "Journalism & Media", text: "Tavis Smiley's public affairs programs on NPR and PBS gave Black public intellectuals, politicians, and community leaders a national platform for two decades, amplifying voices often absent from mainstream media." },
  { cat: "Journalism & Media", text: "The Associated Press's first Black journalist, Ted Poston, broke racial barriers in 1930s newsrooms and covered major civil rights stories when most mainstream outlets refused to assign Black reporters to such beats." },
  { cat: "Journalism & Media", text: "Lerone Bennett Jr., executive editor of Ebony magazine for over four decades, wrote 'Before the Mayflower: A History of Black America' (1962), one of the most influential popular histories of African Americans ever published." },

  // ── Final 17 ─────────────────────────────────────────────────────────────────
  { cat: "Inventors & Scientists", text: "Dr. Raye Montague became the first person — male or female, of any race — to design a U.S. Navy ship using a computer, completing in 18 hours a process that previously took two years." },
  { cat: "Civil Rights", text: "The National Urban League's 'Street Academies' in the late 1960s retrieved high school dropouts from the streets of Harlem and prepared them for college — a grassroots educational intervention that worked." },
  { cat: "Music", text: "Stevie Wonder was the first artist in history to insist on and win full artistic control of his recordings from a major label — a contract renegotiation at age 21 that changed the music industry's relationship with its artists." },
  { cat: "Sports", text: "Venus Williams fought to equalize prize money for women at Wimbledon and the French Open — succeeding in 2007 — a campaign that benefited every female tennis player who followed her." },
  { cat: "Literature & Arts", text: "Amiri Baraka (LeRoi Jones) founded the Black Arts Repertory Theatre School in Harlem in 1965, the founding institution of the Black Arts Movement, which brought art directly to Black communities outside mainstream cultural venues." },
  { cat: "Politics & Firsts", text: "The Freedmen's Bureau Act of 1865 created the Bureau of Refugees, Freedmen, and Abandoned Lands — the first government agency in American history with a specific mandate to uplift a particular group of citizens." },
  { cat: "Military", text: "Harriet Tubman's work during the Civil War as a Union spy earned her a pension — but the federal government denied her application for 30 years; she did not receive it until 1899, the year before her death." },
  { cat: "Culture & Heritage", text: "The National Mall in Washington D.C. now includes the Martin Luther King Jr. Memorial, the African American Civil War Memorial, and the National Museum of African American History and Culture — monuments to a history once invisible on the Mall." },
  { cat: "Film & Television", text: "Lena Horne's refusal to play stereotyped roles in Hollywood led MGM to cast her only in musical numbers — scenes that could be cut for Southern theaters — a painful compromise that made her an inadvertent pioneer of stand-alone musical performance." },
  { cat: "African Heritage", text: "The ancient Library of Alexandria, one of the greatest repositories of knowledge in the ancient world, was located in Africa, and many of its scholars were from across the African continent and the broader African diaspora." },
  { cat: "Business & Entrepreneurship", text: "Ursula Burns, as CEO of Xerox from 2009 to 2016, was the first Black woman to run a Fortune 500 company and the first woman to succeed another woman as CEO of a Fortune 500 company." },
  { cat: "Education & Scholarship", text: "Dr. Beverly Daniel Tatum's book 'Why Are All the Black Kids Sitting Together in the Cafeteria?' (1997) became one of the most widely read books on racial identity development in the United States." },
  { cat: "Resistance & Revolution", text: "The Student Nonviolent Coordinating Committee registered over 200,000 Black voters in Mississippi during Freedom Summer 1964, despite bombings, beatings, and three murders of their workers — an act of collective courage unmatched in American history." },
  { cat: "Icons & Trailblazers", text: "Ida B. Wells co-owned a Memphis newspaper that was destroyed by a white mob in 1892 after she published editorials about lynching. She rebuilt her life in Chicago and kept writing, never stopping her fight for justice." },
  { cat: "NASA & Science", text: "Victor J. Glover, the first Black astronaut to serve on the ISS, completed six spacewalks during his six-month mission — more spacewalks than any other astronaut on a first long-duration mission." },
  { cat: "Community & Activism", text: "John Lewis, in the final months of his life in 2020, marched across the Edmund Pettus Bridge one last time — this time with President Obama and crowds of supporters — 55 years after Bloody Sunday." },
  { cat: "Harlem Renaissance", text: "James Weldon Johnson, in addition to writing the Black National Anthem, wrote 'The Autobiography of an Ex-Colored Man' (1912), one of the first novels to explore the psychology of racial 'passing' in America." },
];

// ── Widget logic ──────────────────────────────────────────────────────────────

// ── Widget logic ──────────────────────────────────────────────────────────────

// ── Widget logic ──────────────────────────────────────────────────────────────

function getDailyFact() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return FACTS[(dayOfYear + now.getFullYear()) % FACTS.length];
}

function truncate(str, maxChars) {
  if (str.length <= maxChars) return str;
  return str.slice(0, maxChars).trimEnd() + "…";
}

const fact = getDailyFact();
const size = config.widgetFamily ?? "medium";

const widget = new ListWidget();
widget.backgroundColor = C.bg;
widget.url = REPO_URL;

const pad = size === "small" ? 14 : 16;
widget.setPadding(pad, pad, pad, pad);

// Top accent bar (simulated via a colored text spacer trick)
const accentStack = widget.addStack();
accentStack.layoutHorizontally();
accentStack.spacing = 4;
accentStack.centerAlignContent();

const dot = accentStack.addText("◆");
dot.font = Font.boldSystemFont(7);
dot.textColor = C.tan;

const catLabel = accentStack.addText(fact.cat.toUpperCase());
catLabel.font = Font.semiboldSystemFont(8);
catLabel.textColor = C.sageDk;
catLabel.lineLimit = 1;

accentStack.addSpacer();

widget.addSpacer(size === "small" ? 6 : 8);

// Fact text
const maxChars = size === "small" ? 180 : size === "large" ? 500 : 280;
const factText = widget.addText(truncate(fact.text, maxChars));
factText.font = size === "small"
  ? Font.italicSystemFont(12)
  : Font.italicSystemFont(13);
factText.textColor = C.brownDk;
factText.minimumScaleFactor = 0.75;

widget.addSpacer();

// Footer
const footer = widget.addStack();
footer.layoutHorizontally();
footer.centerAlignContent();

const footerLeft = footer.addText("Black History Facts");
footerLeft.font = Font.lightSystemFont(8);
footerLeft.textColor = C.brownLt;

footer.addSpacer();

const dateStr = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" });
const footerRight = footer.addText(dateStr);
footerRight.font = Font.lightSystemFont(8);
footerRight.textColor = C.brownLt;

Script.setWidget(widget);

// Preview when run directly in Scriptable
if (size === "small")  widget.presentSmall();
else if (size === "large") widget.presentLarge();
else widget.presentMedium();

Script.complete();
