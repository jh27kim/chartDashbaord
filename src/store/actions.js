import axios from 'axios';

// TODO 함수는 여기로

function getChartData(This) {
  axios.get('http://localhost:8081/chart-data').then((response) => {
    console.log(This);
    This.chartData.datasets[0].data = [];
    This.chartData.labels = [];
    for (var label in response.data.data) {
      This.chartData.labels.push(label);
      This.chartData.datasets[0].data.push(response.data.data[label]);
    }
  });
}

export default getChartData;

// export default {
//   async signupRegister(_, payload) {
//     console.log('payload: ', payload);
//     // const signupData = {
//     //   email: payload.email,
//     //   password: payload.password,
//     // }

//     const response = await fetch(`${SERVER_URL}/user`, {
//       headers: {
//         'Content-Type': 'application/json; charset=utf-8',
//         Accept: '*/*',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Headers': '*'
//       },
//       method: 'POST',
//       body: JSON.stringify(payload)
//     });

//     const responseData = await response.text();

//     if (responseData === '0') {
//       // alert("중복된 닉네임입니다.");
//       return 'FAIL';
//     } else {
//       // alert("사용가능한 닉네임입니다.");
//       const django_server = process.env.VUE_APP_DJANGO_URL

//       const frm = new FormData()
//       frm.append('gender', payload.gender)
//       frm.append('born_year', payload.born_year)

//       axios.post(`${django_server}/recommendations/new_user/`, frm)
//       .then(response=>{
//         console.log(response)
//       })
//       .catch((e)=>{
//         console.log(e)
//       })
//       return 'SUCCESS';
//     }
//   },
// }
