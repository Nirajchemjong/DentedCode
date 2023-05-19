export function Names({ Fname, Lname }) {
  const OnChangeFname = (e) => {
    const { value } = e.target;
    Fname(value);
    console.log(value);
  };

  const OnChangeLname = (e) => {
    const { value } = e.target;
    Lname(value);
    console.log(value);
  };
  return (
    <div>
      <input type="text" placeholder="First Name" onChange={OnChangeFname} />
      <br /> <br />
      <input type="text" placeholder="Last Name" onChange={OnChangeLname} />
      <br /> <br />
    </div>
  );
}
