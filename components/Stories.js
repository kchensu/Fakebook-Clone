import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Kevin Chen Su",
    src: "/kevin-story.jpg",
    profile: "/kevin-profile.jpg",
  },
  {
    name: "Donald Jr Trump",
    src: "/trump-story.jpg",
    profile: "/trump-profile.jpg",
  },
  {
    name: "Elizabeth II",
    src: "/queen-lizzy-story.jpg",
    profile: "/queen-lizzy-profile.jpg",
  },
  {
    name: "Lisa",
    src: "/lisa-story.jpg",
    profile: "/lisa-profile.jpg",
  },
  {
    name: "Justin Trudeau",
    src: "/justin-story.jpg",
    profile: "/justin-profile.jpg",
  },
  {
    name: "Rosé",
    src: "/rose-story.jpg",
    profile: "/rose-profile.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
