# guaca-hive

This is an effort to transform Apache Guacamole into a dynamic virtual images managing platform.

This system contains 3 major subsystems:

1. Guacamole Client and Guacamole Server: Together these two services form a frontend website. Admins can manage the whole system on this website. End users can either play with images or upload their images. End users can also register their Guaca Node as a p2p style hosting machines to host virtual machines. If there are not enough p2p style bare metal hosting machines available, cloud hosted virtual machines will be used.

2. Guaca Hive: A service to orchestrate Guaca Nodes. Guaca Hive will also communicate with Guacamole Client.

3. Guaca Node: A program installed on every p2p style bare metal hosting machine. It will register the hosting machine to the Guaca Hive. It will also manage virtual images on the hosting machine.


---

## How it works

There are 4 parties in Titanturtles Guaca Lab:

1. Node Participants: Who run guaca node on their computers so that the computers can provide a virtual machine hosting service when needed. Guace Node will receive rewards for their services. Also, the services will be scored by End Users and Guaca Hive health check.

2. Administrators: Who run the Guaca Hive to orchestrate Guaca Nodes. Administrators will also maanage Guacamole Client and Guacamole Server.

3. End Users: Who will create account and play on virtual machines. Depends on the situation, some will use it as a free service, some will pay.

4. Image Creators: Who will create and upload virtual images. Depends on the situation, there could be some compensation.


### The Flow

1. Node participants register their computers as Guaca Ndoes.

2. The Guaca Nodes will send registration information to Guaca Hive. The registration information includes number of CPU cores, RAM size and SSD Disk size the node is willing to use to participate.

3. After Guaca Nodes registration, Guaca Hive will regularly check on Guaca Nodes health state. Guaca Hive will also send the Guaca Nodes information to MySQL server. And Guacamole Client will list the Guaca Nodes on the website GUI.

4. Guaca Hive will automatically orchestrate the whole Guaca Nodes managing process and virtual images hosting processes. The Administrators can also manually do the jobs on Guaca.

5. Image Creators can upload the Virtual Images through Guacamole Client.

6. Guacamole Client will notify Guaca Hive that images have been uploaded.

7. Guaca Hive will then distribute images to Guaca Node.

8. Guaca Node will extract the image and ready to use.

9. When an End User start to use a Virtual Image, Guacamole Client will assign a Virtual Image to the End User. Guacamole Client will also notify Guaca Hive about the use. Guaca Hive will communicate with the specific Guaca Node to turn ON the virtual image. Normally, after a few hours (typically 5 hours), the image will be shut down automatically to save the resources.

10. When a Virtual image is started. Guaca Hive will ask Guaca Node to extract another copy of Virtual Image so that it is ready for the next user.

