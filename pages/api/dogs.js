// This is a file FOR FUN, created api Route with dogs JSON which contains information, and useEffect use path '/api/dogs' to get them on the page

export default function (req, res) {
  console.log({ req, res });
  res.json({
    dogs: [
      { dog_breed: 'b', age: 1 },
      { dog_breed: 'a', age: 5 },
      { dog_breed: 'c', age: 10 },
    ],
  });
}
