import TimelineCard from "../components/TimelineCard";
import timelineData from "../data/timelineData";

function Timeline() {
  return (
    <section id="timeline" className="bg-black">
      {timelineData.map((item, index) => (
        <TimelineCard
  key={item.year}
  year={item.year}
  title={item.title}
  image={item.image}
  video={item.video}
  audio={item.audio}
  track={item.track}
  subtitle={item.subtitle}
  quote={item.quote}
  features={item.features}
  color={item.color}
  description={item.description}
  reverse={index % 2 !== 0}
/>
      ))}
    </section>
  );
}

export default Timeline;