/* RESET & FONTS */
body {
    margin: 0;
    padding: 0;
    background-color: #fffafb;
    font-family: 'Lato', sans-serif;
    color: #5d4037;
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1, h2, h3 {
    font-family: 'Playfair Display', serif;
}

/* MUSIC BUTTON */
.music-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #fff;
    border: 1px solid #ffccd5;
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.8rem;
    z-index: 100;
}

/* CONTAINER */
.container {
    width: 90%;
    max-width: 500px;
    text-align: center;
    position: relative;
}

/* SLIDES */
.slide {
    display: none; /* Hidden by default */
    animation: fadeIn 0.8s ease-in-out;
}

.slide.active {
    display: block; /* Show only active slide */
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* TYPOGRAPHY */
.subtitle {
    color: #ff8fa3;
    letter-spacing: 2px;
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
}

.main-title {
    font-size: 3rem;
    color: #4a4a4a;
    line-height: 1.2;
    margin-bottom: 30px;
}

.highlight {
    color: #d63384;
}

/* CARDS & CONTENT */
.card-header h3 {
    margin: 5px 0 15px 0;
    font-size: 1.8rem;
    color: #d63384;
}

.date-tag {
    background-color: #ffe6ea;
    padding: 4px 10px;
    border-radius: 10px;
    color: #d63384;
    font-size: 0.8rem;
    font-weight: bold;
}

.photo-frame {
    margin: 20px auto;
    width: 100%;
    max-width: 350px;
    background: white;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transform: rotate(-2deg);
}

.photo-frame img {
    width: 100%;
    border-radius: 10px;
}

.text-box {
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    margin: 20px 0;
    text-align: left;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #555;
}

.quote {
    font-style: italic;
    color: #d63384;
    font-weight: bold;
    border-left: 3px solid #ffccd5;
    padding-left: 10px;
}

/* LETTER STYLE */
.paper {
    background: #fff9c4;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    text-align: left;
    line-height: 1.8;
    margin-bottom: 20px;
}

.signature {
    margin-top: 20px;
    font-weight: bold;
    color: #d63384;
    text-align: center;
}

/* BUTTONS */
.btn {
    padding: 12px 25px;
    border-radius: 50px;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    transition: transform 0.2s;
    margin-top: 10px;
}

.next-btn {
    background-color: #ff4d6d;
    color: white;
    box-shadow: 0 4px 10px rgba(255, 77, 109, 0.3);
}

.buttons-row {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.yes-btn {
    background-color: #ff4d6d;
    color: white;
    font-weight: bold;
}

.no-btn {
    background-color: white;
    border: 1px solid #d63384;
    color: #d63384;
}

.btn:hover {
    transform: scale(1.05);
}

/* HIDDEN TEXT FOR NO BUTTON */
#response-text {
    background-color: #ffe6ea;
    color: #d63384;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    font-size: 0.9rem;
    display: none;
}

.big-heart { font-size: 3rem; animation: heartbeat 1.5s infinite; }
@keyframes heartbeat { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
    
