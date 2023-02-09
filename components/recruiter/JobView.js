import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const JobView = ({ job, candidates, access_token }) => {

  return (
    <div className="flex justify-content-center">
      <Card sx={{ maxWidth: 650, minHeight: 400 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {job.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {job.address}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }}>{job.description}</Typography>
          <Typography variant="body2">
            company : {job.company}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/job/${job.id}`}>
            <Button size="small">Client View</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default JobView;
