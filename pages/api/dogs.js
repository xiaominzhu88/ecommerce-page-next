// This is a file JUST FOR FUN, created api Route with dogs JSON which contains information, and useEffect in NAV to get them in the console

export default function (req, res) {
  console.log({ req, res });
  res.json({
    dogs: [
      { dog_breed: 'b', age: 10 },
      { dog_breed: 'a', age: 10 },
      { dog_breed: 'a', age: 10 },
    ],
  });
}
