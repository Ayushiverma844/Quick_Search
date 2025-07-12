var input = document.querySelector("input");

var data = [
  {
    name: "Aarav",
    rollNo: "101",
    src: "https://plus.unsplash.com/premium_photo-1675080431524-3e7c85323972?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Anaya",
    rollNo: "102",
    src: "https://media.istockphoto.com/id/964790328/photo/beauty-is-happiness-in-the-heart.jpg?s=612x612&w=0&k=20&c=pxeElNtct4DaV7NmIcJ1EHBd-3HVQ9b_Hz_FPWXnmmk=",
  },
  {
    name: "Kabir",
    rollNo: "103",
    src: "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Ishita",
    rollNo: "104",
    src: "https://media.istockphoto.com/id/942716974/photo/portrait-of-a-beautiful-woman.jpg?s=612x612&w=0&k=20&c=xmVB_n3OSjR0xaFAFj7M7TZO5NUYbfo-LBcbcSHBpfI=",
  },
  {
    name: "Vivaan",
    rollNo: "105",
    src: "https://images.unsplash.com/photo-1565363410878-d7dd2e0d4e6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxtYW4lMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Myra",
    rollNo: "106",
    src: "https://media.istockphoto.com/id/2193260270/photo/close-up-face-woman-multiethnic-indian-arabian-homeowner-businesswoman-student-girl-with.jpg?s=612x612&w=0&k=20&c=zwC_oof2WBgHtc076oX8kQLDtGTZrkDY3ylD0atfPg0=",
  },
  {
    name: "Reyansh",
    rollNo: "107",
    src: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Aadhya",
    rollNo: "108",
    src: "https://images.unsplash.com/photo-1607758164193-19539498ddf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGdpcmwlMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Atharv",
    rollNo: "109",
    src: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Saanvi",
    rollNo: "110",
    src: "https://media.istockphoto.com/id/2170747532/photo/happy-indian-woman-smiling-looking-at-camera-dreaming-good-news-feel-satisfied-on-city-street.jpg?s=612x612&w=0&k=20&c=vz71Cfh7Dffm1yq0cEKLPP1YYa5DaBT7Br01BtFzmnE=",
  },
  {
    name: "Arjun",
    rollNo: "111",
    src: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Kiara",
    rollNo: "112",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdpcmwlMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Krishna",
    rollNo: "113",
    src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxtYW4lMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Avni",
    rollNo: "114",
    src: "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGdpcmwlMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Laksh",
    rollNo: "115",
    src: "https://images.unsplash.com/photo-1594823823554-b3cf73448d3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxtYW4lMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Diya",
    rollNo: "116",
    src: "https://images.unsplash.com/photo-1620993208551-ec648b0468bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGdpcmwlMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Aditya",
    rollNo: "117",
    src: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Meera",
    rollNo: "118",
    src: "https://plus.unsplash.com/premium_photo-1682095479898-910b7e451779?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGdpcmwlMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Dev",
    rollNo: "119",
    src: "https://images.unsplash.com/photo-1618245330073-0b5d03aad5c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxtYW4lMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Inaaya",
    rollNo: "120",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGdpcmwlMjBmYWNlfGVufDB8fDB8fHww",
  },
  {
    name: "Aryan",
    rollNo: "121",
    src: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Tanya",
    rollNo: "122",
    src: "https://images.unsplash.com/photo-1572460418264-695212ed493a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Neel",
    rollNo: "123",
    src: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Rhea",
    rollNo: "124",
    src: "https://plus.unsplash.com/premium_photo-1669704098862-3bc2c25c403d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Yash",
    rollNo: "125",
    src: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Pari",
    rollNo: "126",
    src: "https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Arnav",
    rollNo: "127",
    src: "https://images.pexels.com/photos/2770600/pexels-photo-2770600.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Vanya",
    rollNo: "128",
    src: "https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Rudra",
    rollNo: "129",
    src: "https://images.pexels.com/photos/1002406/pexels-photo-1002406.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Prisha",
    rollNo: "130",
    src: "https://images.unsplash.com/photo-1647058461777-b78da345422e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ5fHxnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ayaan",
    rollNo: "131",
    src: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jiya",
    rollNo: "132",
    src: "https://images.unsplash.com/photo-1679611978819-f10168367155?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUwfHxnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Om",
    rollNo: "133",
    src: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Navya",
    rollNo: "134",
    src: "https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU2fHxnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ira",
    rollNo: "135",
    src: "https://images.unsplash.com/photo-1587382981310-506e3e278950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY1fHxnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Dhruv",
    rollNo: "136",
    src: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Anvi",
    rollNo: "137",
    src: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQwfHxnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Vihaan",
    rollNo: "138",
    src: "https://images.pexels.com/photos/6829574/pexels-photo-6829574.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Ridhima",
    rollNo: "139",
    src: "https://images.unsplash.com/photo-1748981771489-b4c3f03911dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY2fHxnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Samar",
    rollNo: "140",
    src: "https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Shruti",
    rollNo: "141",
    src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Kian",
    rollNo: "142",
    src: "https://images.pexels.com/photos/9775765/pexels-photo-9775765.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Trisha",
    rollNo: "143",
    src: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Zayan",
    rollNo: "144",
    src: "https://images.pexels.com/photos/713829/pexels-photo-713829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Mahi",
    rollNo: "145",
    src: "https://images.pexels.com/photos/2121122/pexels-photo-2121122.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Arjit",
    rollNo: "146",
    src: "https://images.pexels.com/photos/3139612/pexels-photo-3139612.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Ishaan",
    rollNo: "147",
    src: "https://images.pexels.com/photos/9775676/pexels-photo-9775676.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Sanvi",
    rollNo: "148",
    src: "https://images.unsplash.com/photo-1651155801915-471d9c0a4990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDg0fHxnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Rehaan",
    rollNo: "149",
    src: "https://images.unsplash.com/photo-1583692331507-fc0bd348695d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Naira",
    rollNo: "150",
    src: "https://images.unsplash.com/photo-1611490105114-22c8a1be1f73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDc0fHxnaXJsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

var per = "";

data.forEach(function (elem) {
  per += ` <div class="person">
                <div class="img">
                    <img src="${elem.src}" alt="">
                </div>
                <h4>${elem.name}</h4>
                <h4>Roll no: ${elem.rollNo} </h4>
            </div>`;
});

document.querySelector(".people").innerHTML = per;

input.addEventListener("input", function () {
  var val = input.value.toLowerCase();

  var matching = data.filter(function (e) {
    // Check both name and roll number
    return e.name.toLowerCase().startsWith(val) || e.rollNo.startsWith(val);
  });

  var newusers = "";
  matching.forEach(function (elem) {
    newusers += ` <div class="person">
                <div class="img">
                    <img src="${elem.src}" alt="">
                </div>
                <h4>${elem.name}</h4>
                <h4>Roll no: ${elem.rollNo} </h4>
            </div>`;
  });

  document.querySelector(".people").innerHTML = newusers;
});
