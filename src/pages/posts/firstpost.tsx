import Link from "next/link";

export default function FirstPost () {
  return (
    <>
      <h1>firstpost!</h1>
      <h2>
        <Link href="/" legacyBehavior>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
};
