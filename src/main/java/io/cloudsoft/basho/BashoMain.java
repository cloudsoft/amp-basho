package io.cloudsoft.basho;

import org.apache.brooklyn.api.catalog.BrooklynCatalog;
import org.apache.brooklyn.cli.Main;
import io.airlift.command.Command;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Arrays;

/**
 * This class provides a static main entry point for launching a custom Brooklyn-based app.
 * <p>
 * It inherits the standard Brooklyn CLI options from {@link Main},
 * plus adds a few more shortcuts for favourite blueprints to the {@link LaunchCommand}.
 */
public class BashoMain extends Main {
    
    private static final Logger log = LoggerFactory.getLogger(BashoMain.class);
    
    public static void main(String... args) {
        log.debug("CLI invoked with args "+Arrays.asList(args));
        new BashoMain().execCli(args);
    }

    @Override
    protected String cliScriptName() {
        return "start.sh";
    }
    
    @Override
    protected Class<? extends BrooklynCommand> cliLaunchCommand() {
        return LaunchCommand.class;
    }

    @Command(name = "launch", description = "Starts a server, and optionally an application. "
        + "Use e.g. --single or --cluster to launch one-node and clustered variants of the sample web application.")
    public static class LaunchCommand extends Main.LaunchCommand {

        // add these options to the LaunchCommand as shortcuts for our favourite applications
        
        @Override
        public Void call() throws Exception {

            // now process the standard launch arguments
            return super.call();
        }

        @Override
        protected void populateCatalog(BrooklynCatalog catalog) {
            super.populateCatalog(catalog);
        }
    }
}
