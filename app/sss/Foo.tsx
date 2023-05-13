export default async function Foo() { 
  return await fetch('http://localhost:9999/')
    .then((res) => res.json())
    .then((data) => {
      return data.foo;
    });
}