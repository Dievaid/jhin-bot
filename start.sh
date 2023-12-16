while true
do
        npm run start
        echo "[$(date)] App crashed... restarting..." >> run.log
        sleep 1
done
